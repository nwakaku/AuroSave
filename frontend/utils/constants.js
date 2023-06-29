import contractStuff from "../contracts/contract.json";
import erc20abi from "../contracts/mockToken.json";
import { useState, createContext, useContext } from "react";

export const contractAbi = contractStuff;
export const ercTokenAbi = erc20abi;

//aurora token
export const mockTokenAddress = "0x847be8709251f673a4E8509958C6f433D7aC701d";

export const ERC721MockAddress = '0x9AfFDF8A6b23f42d25EEFF5d79d2b3DEf5092D0E';
export const ERC1155MockAddress = '0xAB45D1cDDf5e32781071c94127c519510819B422';


export const contractAddress_BSC = "0xEFBdE067D5F9Ad90BE7B164a064BA756B5567B73";

// MyBEP20Token is deployed to: 0x5F32C2629968a82feE28aceD1B1eb2899B625836
// gasUsed: BigNumber { value: "1525432" }
// Incase Contract deployed to: 0xEFBdE067D5F9Ad90BE7B164a064BA756B5567B73
// gasUsed: BigNumber { value: "5446949" }

// aurora address
export const contractAddress = "0x8dc90d8452708E93530E5a2cbB3d4A8B09754432";

// xdc address
export const contractAddress_xdc = "0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf";

// thundercore address
export const contractAddress_thunder = "0x5F73A5F39Ac5817F98D3EEea103E1A420e8FB9B5";

//Mumbai address
export const contractAddress_mumbai = "0xc343e84c6ae02121EC97aE1F1FDC23B44cD9B8eb";

//5ire Address
export const contractAddress_5ire = "0xd3EE85C16E953753c31352931bbE6815E60ce795";

//Scroll Network
export const contractAddress_scroll = "0x2235475923BA7760EcE76Fc39a234D7B8aFe8b3B";

//Gnosis Network
export const contractAddress_Gnosis = "0x8dc90d8452708E93530E5a2cbB3d4A8B09754432";

// polygon zkEVM
export const contractAddress_zkEVM = "0x5F73A5F39Ac5817F98D3EEea103E1A420e8FB9B5";

//Taiko Network
export const contractAddress_Tai = "0x8dc90d8452708E93530E5a2cbB3d4A8B09754432";



export const contractConfig = {
//   address: contractAddress,
  abi: contractAbi,
  watch: true,
//   chainId: 280,
};

export const contractRecklessWriteConfig = {
    // address: contractAddress,
    abi: contractAbi,
    mode: "recklesslyUnprepared",
}

export const contractWriteConfig = {
    // address: contractAddress,
    abi: contractAbi,
}

export const NFTABI =
    [
        {
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
    ]
