import { Web3Button } from "@web3modal/react";
import style from "../Header/Header.module.scss";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'

const WalletConnect = () => {

  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ address })
  const { data: ensName } = useEnsName({ address })
  const { disconnect } = useDisconnect()
 
  const onClickDisconnect = () => {
    disconnect()
  }

  if (isConnected) {
    return (
      <div>
        <img src={ensAvatar!} alt="ENS Avatar" />
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector?.name}</div>
        <button onClick={onClickDisconnect}>Disconnect</button>
      </div>
    )
  }

  return (
    <div className={style.walletBtn}>
      <Web3Button />
    </div>
  );
};

export default WalletConnect;
