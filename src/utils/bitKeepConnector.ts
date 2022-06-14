import { AbstractConnector } from '@web3-react/abstract-connector';
import { AbstractConnectorArguments, ConnectorUpdate } from '@web3-react/types';

declare global {
  interface Window {
    bitkeep?: any
  }
}

export type SendReturnResult = { result: any }
export type SendReturn = any
type Send = (method: string, params?: any[]) => Promise<SendReturnResult | SendReturn>;
export type SendOld = ({ method }: { method: string }) => Promise<SendReturnResult | SendReturn>;

function parseSendReturn(sendReturn: SendReturnResult | SendReturn): any {
  return Object.prototype.hasOwnProperty.call(sendReturn, 'result') ? sendReturn.result : sendReturn
}

export class NoBitkeepProviderError extends Error {
  public constructor() {
    super()
    this.name = this.constructor.name
    this.message = 'No BitKeep provider was found on window.bitkeep.'
  }
}

export class UserRejectedRequestError extends Error {
  public constructor() {
    super()
    this.name = this.constructor.name
    this.message = 'The user rejected the request.'
  }
}

export class BitKeepConnector extends AbstractConnector {
  constructor(kwargs: AbstractConnectorArguments) {
    super(kwargs);
    console.log(kwargs);
    this.handleChainChanged = this.handleChainChanged.bind(this);
    this.handleAccountsChanged = this.handleAccountsChanged.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  private handleChainChanged(chainId: string | number): void {
    console.log("Handling 'chainChanged' event with payload", chainId)
    this.emitUpdate({ chainId, provider: window.bitkeep.ethereum })
  }

  private handleAccountsChanged(accounts: string[]): void {
    console.log("Handling 'accountsChanged' event with payload", accounts)
    if (accounts.length === 0) {
      this.emitDeactivate()
    } else {
      this.emitUpdate({ account: accounts[0] })
    }
  }

  private handleClose(code: number, reason: string): void {
    console.log("Handling 'close' event with payload", code, reason)
    this.emitDeactivate()
  }

  public async activate() : Promise<ConnectorUpdate> {
    if (!window.bitkeep.ethereum)
      throw new NoBitkeepProviderError();
    const ethereum = window.bitkeep.ethereum;
    if (ethereum.on) {
      ethereum.on('chainChanged', this.handleChainChanged)
      ethereum.on('accountsChanged', this.handleAccountsChanged)
      ethereum.on('close', this.handleClose)
    }
    if ((ethereum as any).isBitKeep) {
      (ethereum as any).autoRefreshOnNetworkChange = false;
    }
    // try to activate + get account via eth_requestAccounts
    let account
    try {
      account = await (ethereum.send as Send)('eth_requestAccounts').then(
        sendReturn => parseSendReturn(sendReturn)[0]
      )
    } catch (error) {
      if ((error as any).code === 4001) {
        throw new UserRejectedRequestError()
      }
    }

    // if unsuccessful, try enable
    if (!account) {
      // if enable is successful but doesn't return accounts, fall back to getAccount (not happy i have to do this...)
      account = await ethereum.enable().then(sendReturn => sendReturn && parseSendReturn(sendReturn)[0])
    }

    return { provider: ethereum, ...(account ? { account } : {}) }
  }

  public async getProvider(): Promise<any> {
    return window.bitkeep.ethereum;
  }

  public async getChainId(): Promise<number | string> {
    if (!window.bitkeep || !window.bitkeep.ethereum) {
      throw new NoBitkeepProviderError();
    }
    
    const ethereum = window.bitkeep.ethereum;
    let chainId;
    try {
      chainId = await (ethereum.send as Send)('eth_chainId').then(parseSendReturn)
    } catch {
      throw new Error('eth_chainId was unsuccessful, falling back to net_version');
    }

    if (!chainId) {
      try {
        chainId = await (ethereum.send as Send)('net_version').then(parseSendReturn)
      } catch {
        throw new Error('net_version was unsuccessful, falling back to net version v2')
      }
    }

    if (!chainId) {
      try {
        chainId = parseSendReturn((ethereum.send as SendOld)({ method: 'net_version' }))
      } catch {
        throw new Error('net_version v2 was unsuccessful, falling back to manual matches and static properties')
      }
    }

    if (!chainId) {
      if ((ethereum as any).isDapper) {
        chainId = parseSendReturn((ethereum as any).cachedResults.net_version)
      } else {
        chainId =
          (ethereum as any).chainId ||
          (ethereum as any).netVersion ||
          (ethereum as any).networkVersion ||
          (ethereum as any)._chainId
      }
    }

    return chainId
  }

  public async getAccount(): Promise<null | string> {
    if (!window.bitkeep || !window.bitkeep.ethereum) {
      throw new NoBitkeepProviderError()
    }

    const ethereum = window.bitkeep.ethereum;
    let account
    try {
      account = await (ethereum.send as Send)('eth_accounts').then(sendReturn => parseSendReturn(sendReturn)[0])
    } catch {
      throw new Error('eth_accounts was unsuccessful, falling back to enable');
    }

    if (!account) {
      try {
        account = await ethereum.enable().then(sendReturn => parseSendReturn(sendReturn)[0])
      } catch {
        throw new Error('enable was unsuccessful, falling back to eth_accounts v2')
      }
    }

    if (!account) {
      account = parseSendReturn((ethereum.send as SendOld)({ method: 'eth_accounts' }))[0]
    }

    return account
  }

  public deactivate() {
    if (window.bitkeep && window.bitkeep.ethereum && window.bitkeep.ethereum.removeListener) {
      window.bitkeep.ethereum.removeListener('chainChanged', this.handleChainChanged)
      window.bitkeep.ethereum.removeListener('accountsChanged', this.handleAccountsChanged)
      window.bitkeep.ethereum.removeListener('close', this.handleClose)
    }
  }
}

const bitkeepName = "";
export default bitkeepName;