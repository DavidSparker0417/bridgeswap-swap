import chainName from "constants/chainName"

export default function getChainLogo(chainId: number): JSX.Element | undefined {
    return chainName[chainId] !== undefined ? chainName[chainId].logo : undefined
}