import { useEffect, useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useNetwork,
} from "wagmi";
import {
  contractConfig,
  ercTokenAbi,
  NFTABI,
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
import AddLegacy from "./addLegacy";

const approve = (props) => {
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

  const [callWrite, setCallWrite] = useState(false);

  const { data, write } = useContractWrite({
    address: tokenAddress,
    abi: tokenStandard === "ERC20" ? ercTokenAbi : NFTABI,
    functionName: tokenStandard === "ERC20" ? "approve" : "setApprovalForAll",
    args: [nContract, tokenStandard === "ERC20" ? allowance : true],
    onError(error) {
      console.log("Error", error);
    },
  });

  const { status } = useWaitForTransaction({ hash: data?.hash });

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

  useEffect(() => {
    console.log(`status: ${status}`);
    console.log(`props: ${JSON.stringify(props)}`);
  }, [status]);

  return (
    <>
      {status === "idle" && (
        <h2 className=" text-xl font-bold p-5">
          Preparing {tokenStandard} Approval Request...
        </h2>
      )}
      {status === "loading" && (
        <h2 className=" text-xl font-bold p-5">
          Waiting for {tokenStandard} Approval...
        </h2>
      )}
      {status === "error" && (
        <>
          <h2 className=" text-xl font-bold p-5">
            {tokenStandard} Approval Failed
          </h2>
          <button
            className="text-lg font-semibold bg-gray-200 py-3 px-8 self-start mx-3 border-none rounded-full"
            onClick={() => {
              clearForm();
              setSubmitted(false);
            }}
          >
            Reload
          </button>
        </>
      )}
      {status === "success" && (
        <AddLegacy
          tokenStandard={tokenStandard}
          tokenAddress={tokenAddress}
          beneficiary={beneficiary}
          amount={amount}
          tokenId={tokenId}
          setSubmitted={setSubmitted}
          clearForm={clearForm}
        />
      )}
    </>
  );
};

export default approve;
