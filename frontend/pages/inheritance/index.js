import React, { useEffect, useState } from "react";

import { useAccount, useContractRead, useNetwork } from "wagmi";
import { ethers } from "ethers";
import {
  contractAbi,
  contractConfig,
  contractWriteConfig,
  contractAddress,
  contractAddress_xdc,
  contractAddress_thunder,
  contractAddress_mumbai,
  contractAddress_5ire,
  contractAddress_scroll,
  contractAddress_Gnosis,
  contractAddress_zkEVM,
  contractAddress_BSC,
} from "../../utils/constants";
import { Header } from "../../components/header";

function Index() {
  const { address, isConnected } = useAccount();
  const [myNFTs, setMyNFTs] = useState([]);
  const [tokenType, setTokenType] = useState("");

  // configure chain
  const { chain, chains } = useNetwork();

  let nContract;

  if (chain.id === 1313161554) {
    nContract = contractAddress;
  } else if (chain && chain.id === 97) {
    nContract = contractAddress_BSC;
  } else if (chain.id === 51) {
    nContract = contractAddress_xdc;
  } else if (chain.id === 18) {
    nContract = contractAddress_thunder;
  } else if (chain.id === 80001) {
    nContract = contractAddress_mumbai;
  } else if (chain.id === 997) {
    nContract = contractAddress_5ire;
  } else if (chain.id === 534353) {
    nContract = contractAddress_scroll;
  } else if (chain.id === 10200) {
    nContract = contractAddress_Gnosis;
  } else if (chain.id === 1442) {
    nContract = contractAddress_zkEVM;
  }

  const { data } = useContractRead({
    ...contractConfig,
    address: nContract,
    functionName: "getBeneficiaryLegacies",
    args: [address],
  });

  const getMyNFTs = async () => {
    if (isConnected) {
      setMyNFTs(data);
    } 
  };

  // useEffect(() => {
  //   getMyNFTs();
  // }, [address, isConnected]);
  useEffect(() => {
    // console.log(`LegacyNFTs[${nftId}]: ${nfts?.toString()}`)
    // getMyNFTs();
    getMyNFTs();
    console.log(myNFTs);
    const amount = myNFTs?.amount?.toString();
    const tokenId = myNFTs?.tokenId?.toNumber();
    if (tokenId == 0) {
      setTokenType("ERC20");
    } else {
      if (amount == 0) setTokenType("ERC721");
      else setTokenType("ERC1155");
    }
  }, []);

  return (
    <>
      {isConnected && address && (
        <div className="h-screen flex flex-col">
          <Header />
          <div></div>
          <hr></hr>

          <main className="flex flex-col items-center justify-center grow mx-5">
            {isConnected ? (
              <>
                <h2 className="text-3xl font-semibold max-w-50 justify-center">
                  Check Your Inheritance
                </h2>

                <p className="text-xl mt-2 text-gray-400 border-b-2 border-gray-300 pb-3 justify-center">
                  This is the Assumed Inheritance you will be recieving from
                  this Account
                </p>

                <div className="grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5 justify-items-center">
                  <h3 className="font-semibold">Token</h3>
                  <h3 className="font-semibold">Beneficiary</h3>
                  <h3 className="font-semibold">Amount</h3>
                  <h3 className="font-semibold">Token ID</h3>
                  <h3 className="font-semibold">Type</h3>
                  <h3 className="font-semibold">Delete</h3>
                </div>
                {myNFTs ?
                  myNFTs.map((legacy, index) => (
                  <div className="grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5">
                    <h3 className="truncate">{legacy?.token?.toString()}</h3>
                    <h3 className="truncate">
                      {legacy?.beneficiary?.toString()}
                    </h3>
                    {tokenType == "ERC20" ? (
                      <h3 className="justify-self-center truncate">
                        {ethers.utils.formatEther(legacy?.amount).toString()}
                      </h3>
                    ) : (
                      <h3 className="justify-self-center">
                        {ethers.utils.formatEther(legacy?.amount).toString()}
                      </h3>
                    )}
                    <h3 className="justify-self-center">
                      {legacy?.tokenId?.toString()}
                    </h3>
                    <h3 className="justify-self-center">{tokenType}</h3>
                    <button
                      className="justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto"
                      onClick={() => removeLegacy()}
                    >
                      X
                    </button>
                  </div>
                )) : null
                }
                
              </>
            ) : (
              <>snull</>
            )}
          </main>
        </div>
      )}
    </>
  );
}

export default Index;
