import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 80001]
});

const infuraKey = process.env.INFURA_KEY as string;
const infuraAppName = process.env.INFURA_APP_NAME as string;

const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${infuraKey}`,
  appName: infuraAppName
});

export const connectors = {
  injected: injected,
  coinbaseWallet: walletlink
};