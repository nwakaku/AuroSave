import * as React from "react";
import NextHead from "next/head";
import "../styles/globals.css";

// Imports
import { chain, createClient, WagmiConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
  coinbaseWallet
} from "@rainbow-me/rainbowkit/wallets";

import { useIsMounted } from "../hooks";
import {
  gnosisChiado,
  mainnet,
  aurora
  
} from "wagmi/chains";
import {
  mantleTestnet,
  xdcTestnet,
  thundercoreTestnet,
  scroll_Alpha,
  Testnet_Thunder,
  Taiko,
  Polygon_zkEVM,
  bscTestnet,
  auroraHackathon,
} from "../utils/networks";

const { chains, provider } = configureChains(
  [
    aurora,
    auroraHackathon,
    mantleTestnet,
    xdcTestnet,
    thundercoreTestnet,
    Testnet_Thunder,
    mainnet,
    scroll_Alpha,
    gnosisChiado,
    Taiko,
    Polygon_zkEVM,
    bscTestnet
  ],
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      argentWallet({ chains }),
      injectedWallet({ chains }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      metaMaskWallet({ chains }),
      coinbaseWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = ({ Component, pageProps }) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
        <NextHead>
          <title>Incase</title>
        </NextHead>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
