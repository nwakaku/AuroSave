export const thundercoreTestnet = {
  id: 18,
  name: "ThunderCore Testnet",
  network: "thundercore",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "ThunderCore Testnet Ether",
    symbol: "TT",
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.thundercore.com"],
    },
  },
  blockExplorers: {
    default: { name: "ThunderScan", url: "https://testnet.thunderscan.io/" },
  },
  testnet: true,
};

export const bscTestnet = {
  id: 97,
  name: "Binance Smart Chain Testnet",
  network: "bsc",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Binance Smart Chain Testnet Ether",
    symbol: "tBNB",
  },
  rpcUrls: {
    default: {
      http: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
    },
  },
  blockExplorers: {
    default: {
      name: "Binance Smart Chain Testnet Explorer",
      url: "https://testnet.bscscan.com/",
    },
  },
  testnet: true,
};


export const xdcTestnet = {
  id: 51,
  name: "XDC Testnet",
  network: "xdc",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "XDC Testnet Ether",
    symbol: "TXDC",
  },
  rpcUrls: {
    default: {
      http: ["https://erpc.apothem.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "XDC Testnet Explorer",
      url: "https://explorer.apothem.network/",
    },
  },
  testnet: true,
};

export const mantleTestnet = {
  id: 5001,
  name: "Mantle",
  network: "mantle",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "BIT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: { name: "Wadsley", url: "https://explorer.testnet.mantle.xyz/" },
    etherscan: { name: "Wadsley", url: "https://explorer.testnet.mantle.xyz/" },
  },
  testnet: true,
};

export const Testnet_Thunder = {
  id: 997,
  name: "Testnet 5ire",
  network: "5ireChain",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "5ireChain",
    symbol: "5ire",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.5ire.network"],
    },
  },
  blockExplorers: {
    default: { name: "5ire", url: "https://explorer.5ire.network" },
    etherscan: { name: "5ire", url: "https://explorer.5ire.network" },
  },
  testnet: true,
};

export const scroll_Alpha = {
  id: 534353,
  name: "scrollAlpha",
  network: "scroll Alpha",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#e9d0b8",
  nativeCurrency: {
    decimals: 18,
    name: "scrollAlpha",
    symbol: "scrollAlpha",
  },
  rpcUrls: {
    default: {
      http: ["https://alpha-rpc.scroll.io/l2"],
    },
  },
  blockExplorers: {
    default: { name: "scroll", url: "https://blockscout.scroll.io" },
    etherscan: { name: "scroll", url: "https://blockscout.scroll.io" },
  },
  testnet: true,
};

/* adding gnosis network */

export const Taiko = {
  id: 167004,
  name: "Taiko",
  network: "Taiko",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Taiko_Apha",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.a2.taiko.xyz"],
    },
  },
  blockExplorers: {
    default: { name: "Taiko_apha", url: "https://explorer.a2.taiko.xyz" },
  },
  testnet: true,
};

/* Polygon zkevm-testnet */
export const Polygon_zkEVM = {
  id: 1442,
  name: "Polygon zkEVM Testnet",
  network: "zkEVM",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Polygon zkEVM Testnet",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.public.zkevm-test.net"],
    },
  },
  blockExplorers: {
    default: {
      name: "Polygon zkEVM",
      url: "https://explorer.public.zkevm-test.net",
    },
  },
  testnet: true,
};

/* Aurora */
export const auroraHackathon = {
  id: 1313161558,
  name: "Aurora Hackathon",
  network: "aurora",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["http://hackathon.aurora.dev"],
    },
  },
  blockExplorers: {
    default: {
      name: "Aurora Explorer",
      url: "https://explorer.hackathon.aurora.dev",
    },
  },
  testnet: true,
};