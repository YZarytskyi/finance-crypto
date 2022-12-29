import style from "../Crypto/Exchanges/Exchanges.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const CryptoSkeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#121212" highlightColor="#262626">
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr><td colSpan={9}><Skeleton height={55} width={"100%"} /></td></tr>
        <tr className={style.table} style={{ marginBottom: 15 }}>
          <td colSpan={9}><Skeleton height={53} width={"100%"} /></td>
        </tr>
      </SkeletonTheme>
    </>
  );
};
