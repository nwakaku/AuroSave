import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useSigner,
  useNetwork,
} from "wagmi";
import LegacyAddModal from "../../components/legacyAddModal";
import ResolveDomain from "../../components/resolveDomain";
import CheckIn from "../../components/checkIn";
import LegacyList from "../../components/legacyList";
import React, { useState, useEffect } from "react";
import {
  contractConfig,
  contractAddress,
  contractAddress_xdc,
  contractAddress_thunder,
  contractAddress_mumbai,
  contractAddress_scroll,
  contractAbi,
  contractAddress_5ire,
  contractAddress_Gnosis,
  contractAddress_zkEVM,
  contractAddress_BSC,
} from "../../utils/constants";
import Footer from "../../components/footer";
import { Header } from "../../components/header";

const index = () => {
  const { address, isConnected } = useAccount();
  const { data: signerData } = useSigner();
  const [loading, setLoading] = useState(false);
  const [legacyCount, setLegacyCount] = useState(0);

  // configure chain
  const { chain, chains } = useNetwork();

  let nContract;

  if (chain && chain.id === 1313161554) {
    nContract = contractAddress;
  } else if (chain && chain.id === 97) {
    nContract = contractAddress_BSC;
  } else if (chain && chain.id === 51) {
    nContract = contractAddress_xdc;
  } else if (chain && chain.id === 18) {
    nContract = contractAddress_thunder;
  } else if (chain && chain.id === 80001) {
    nContract = contractAddress_mumbai;
  } else if (chain && chain.id === 997) {
    nContract = contractAddress_5ire;
  } else if (chain && chain.id === 534353) {
    nContract = contractAddress_scroll;
  } else if (chain && chain.id === 10200) {
    nContract = contractAddress_Gnosis;
  } else if (chain && chain.id === 1442) {
    nContract = contractAddress_zkEVM;
  }

  const { data: legacyCountData } = useContractRead({
    ...contractConfig,
    address: nContract,
    functionName: "legacyCount",
    args: [address],
  });

  useEffect(() => {
    console.log("LOGS");
    console.log("Legacy Count:", legacyCountData?.toString());

    console.log("___________");
  }, [chain]);

  useEffect(() => {
    if (!legacyCountData) return;
    setLegacyCount(legacyCountData.toNumber());
  }, [legacyCountData]);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div></div>
      <hr></hr>
      <main className="flex flex-col items-center justify-center grow mx-5">
        {isConnected ? (
          <>
            {address && legacyCount > 0 && <CheckIn />}

            <h2 className="text-3xl font-semibold max-w-50 justify-center">
              Register your beneficiary
            </h2>

            <p className="text-xl mt-2 text-gray-400 border-b-2 border-gray-300 pb-3 justify-center">
              Schedule automatic payouts to accounts of your choice as your will
              or as a fall back.
            </p>

            <div className="grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5 justify-items-center">
              <h3 className="font-semibold">Token</h3>
              <h3 className="font-semibold">Beneficiary</h3>
              <h3 className="font-semibold">Amount</h3>
              <h3 className="font-semibold">Token ID</h3>
              <h3 className="font-semibold">Type</h3>
              <h3 className="font-semibold">Delete</h3>
            </div>

            {isConnected && address && <LegacyList nContract={nContract} />}

            <div>
              <LegacyAddModal />
              <ResolveDomain />
            </div>
          </>
        ) : (
          <>
            <p>Please Connect Wallet</p>
          </>
        )}
      </main>
    </div>
  );
};

export default index;
