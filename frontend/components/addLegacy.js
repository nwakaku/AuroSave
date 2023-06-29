import { useEffect, useState } from "react";
import { useContractWrite, useWaitForTransaction, useNetwork } from "wagmi";
import {
  contractRecklessWriteConfig,
  contractAddress,
  contractAddress_xdc,
  contractAddress_thunder,
  contractAddress_mumbai,
  contractAddress_5ire,
  contractAddress_scroll,
  contractAddress_Gnosis,
  contractAddress_zkEVM,
  contractAddress_BSC,
} from "../utils/constants";

const addLegacy = (props) => {
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

  const {
    tokenStandard,
    tokenAddress,
    beneficiary,
    amount,
    tokenId,
    allowance,
    setSubmitted,
    clearForm,
  } = props;

  const [callWrite, setCallWrite] = useState(false);

  const { data, write, status } = useContractWrite({
    ...contractRecklessWriteConfig,
    address: nContract,
    functionName: "addLegacy",
    args: [tokenAddress, beneficiary, amount, tokenId],
  });

  const { data: receipt, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    if (status === "error") console.log(`AddLegacy Failed!`);
    if (status === "success") console.log(`AddLegacy Success!`);
  }, [status]);

  useEffect(() => {
    if (tokenAddress && beneficiary && (amount || tokenId) && !callWrite) {
      setCallWrite(true);
    }
  }, []);

  useEffect(() => {
    if (callWrite) {
      write();
    }
  }, [callWrite]);

  return (
    <>
      {isSuccess ? (
        <>
          <h2 className="text-xl font-bold p-5">
            Legacy successfully created!
          </h2>
          {/* <a href={`https://goerli.etherscan.io/tx/${receipt?.transactionHash}`}> */}

          <button
            className="text-lg font-semibold bg-gray-200 py-3 px-8 self-start mx-3 border-none rounded-full"
            onClick={() => {
              clearForm();
              setSubmitted(false);
            }}
          >
            Close
          </button>
        </>
      ) : status === "error" ? (
        <>
          <h2 className=" text-xl font-bold p-5">
            Add legacy failed or rejected.
          </h2>
          <button
            className="text-lg font-semibold bg-gray-200 py-3 px-8 self-start mx-3 border-none rounded-full"
            onClick={() => {
              clearForm();
              setSubmitted(false);
            }}
          >
            Close
          </button>
        </>
      ) : (
        <h2 className=" text-xl font-bold p-5">Creating legacy...</h2>
      )}
    </>
  );
};

export default addLegacy;
