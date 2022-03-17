import chainName from "constants/chainName"

export default function getChainName(chainId: number): string | undefined{
    return chainName[chainId] !== undefined ? chainName[chainId].name : undefined
}