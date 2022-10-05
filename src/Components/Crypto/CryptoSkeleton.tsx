import style from "../Crypto/Exchanges/Exchanges.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


export const CryptoSkeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#2c2b2b" highlightColor="#4d4d4d">
        <div className={style.table} style={{marginBottom: -17, marginTop: -1}}>
          <div>
           <Skeleton height={50} width={'100%'} />
          </div>
        </div>
      </SkeletonTheme>
      <SkeletonTheme baseColor="#121212" highlightColor="#262626">
        <div className={style.table} style={{marginBottom: 15}}>
          <div>
           <Skeleton count={15} height={53} width={'100%'} />
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
};