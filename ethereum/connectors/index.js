import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { SUPPORTED_CHAINS_IDS } from "../constants/chains";
import { NetworkConnector } from "./NetworkConnector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
// import { LedgerConnector } from '@web3-react/ledger-connector';
// import { TrezorConnector } from '@web3-react/trezor-connector';
// import { FrameConnector } from '@web3-react/frame-connector';
// import { FortmaticConnector } from '@web3-react/fortmatic-connector';
// import { PortisConnector } from '@web3-react/portis-connector';
// import { SquarelinkConnector } from '@web3-react/squarelink-connector';
// import { TorusConnector } from '@web3-react/torus-connector';
// import { AuthereumConnector } from '@web3-react/authereum-connector';

import { getLibrary } from "../utils";

const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY;

if (typeof INFURA_KEY === "undefined") {
  throw new Error(
    `NEXT_PUBLIC_INFURA_KEY must be a defined environment variable`
  );
}

const NETWORK_URLS = {
  [SUPPORTED_CHAINS_IDS.ROPSTEN]: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
  [SUPPORTED_CHAINS_IDS.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [SUPPORTED_CHAINS_IDS.KOVAN]: `https://kovan.infura.io/v3/${INFURA_KEY}`,
  [SUPPORTED_CHAINS_IDS.GANACHE]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [SUPPORTED_CHAINS_IDS.RINKEBY]: `https://rinkerby.infura.io/v3/${INFURA_KEY}`,
};

const SUPPORTED_CHAIN_IDS = [
  // SUPPORTED_CHAINS_IDS.MAINNET,
  // SUPPORTED_CHAINS_IDS.KOVAN,
  // SUPPORTED_CHAINS_IDS.GANACHE,
  SUPPORTED_CHAINS_IDS.ROPSTEN,
  // SUPPORTED_CHAINS_IDS.RINKEBY,
];

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 1,
});

let networkLibrary;
export function getNetworkLibrary() {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider));
}

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});

export const walletconnect = new WalletConnectConnector({
  // supportedChainIds: SUPPORTED_CHAIN_IDS,
  rpc: NETWORK_URLS,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 15000,
});

export const walletlink = new WalletLinkConnector({
  url: NETWORK_URLS,
  appName: "Staking App",
});
