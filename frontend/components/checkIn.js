import React, { useEffect, useState } from "react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useNetwork,
} from "wagmi";
import {
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
} from "../utils/constants";

const checkIn = () => {
  const [checkingIn, setCheckingIn] = useState(false);
  const [executionDay, setExecutionDay] = useState(0);

  const { isConnected, address } = useAccount();

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

  const { data: execDay } = useContractRead({
    ...contractConfig,
    address: nContract,
    functionName: "executionDay",
    args: [address],
  });

  const { config: checkInTask, error: checkInError } = usePrepareContractWrite({
    ...contractWriteConfig,
    address: nContract,
    functionName: "checkIn",
    onError(error) {
      console.log("Error", error);
    },
  });

  const {
    data: checkInData,
    isCheckInDataLoading,
    write: checkIn,
    isError,
    isSuccess,
  } = useContractWrite(checkInTask);

  const handleClick = () => {
    if (!isConnected || !address || checkIn == undefined) return;
    setCheckingIn(true);
    checkIn();
  };

  const dateLookup = (dayOfYear) => {
    const today = new Date();
    const diff = dayOfYear - (Math.floor(today / (24 * 60 * 60 * 1000)) % 365);
    if (diff < 0) diff += 365;
    today.setDate(today.getDate() + diff);
    return today;
  };

  useEffect(() => {
    if (!isError && !isSuccess) return;
    setCheckingIn(false);
  }, [isError, isSuccess]);

  useEffect(() => {
    if (!execDay) return;
    setExecutionDay(execDay.toNumber());
    // console.log(execDay.toNumber());
    // console.log(dateLookup(execDay.toNumber()));
  }, [execDay]);

  return (
    <>
      <h2 className=" text-xl font-bold p-5">
        Day of will execution: {dateLookup(executionDay).toDateString()}
      </h2>
      <button
        onClick={handleClick}
        disabled={checkingIn}
        className="bg-green-700 hover:bg-yellow-600 disabled:bg-yellow-400 text-white text-bold rounded-full px-12 py-2 sm:w-auto mt-2 mb-12"
      >
        Check In
      </button>
    </>
  );
};

export default checkIn;
