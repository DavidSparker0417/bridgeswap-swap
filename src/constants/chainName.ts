
import BSCLogo2 from "./chainLogos/BSCLogo";

export interface ChainDetail {
    name: string;
    shortName: string;
    chainIdHex: string;
    networkId: number;
    logo: JSX.Element;
}

export interface ChainNameType {
    [key: number]: ChainDetail
}

const chainName : ChainNameType = {
    56: {
        name: "BSC Mainnet",
        shortName: "BSC",
        chainIdHex: "0x38",
        networkId: 56,
        logo: BSCLogo2,
    }
}

export default chainName