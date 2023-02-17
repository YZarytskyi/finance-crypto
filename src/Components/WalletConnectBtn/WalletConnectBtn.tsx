import { Web3Button } from "@web3modal/react";
import { useWeb3Modal } from "@web3modal/react";

const WalletConnect = () => {
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();

  return (
      <Web3Button />
  );
};

export default WalletConnect;
