import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { configureChains, createClient } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

export const PROJECT_ID = "6f1a3ec5e0a634d4a3f3931c5e8e0c37";

const chains = [arbitrum, mainnet, polygon];

const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: PROJECT_ID }),
]);
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: PROJECT_ID,
    version: "2",
    appName: "web3Modal",
    chains,
  }),
  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);
