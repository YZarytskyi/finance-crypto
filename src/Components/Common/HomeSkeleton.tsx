import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import style from "../Home/Home.module.scss";

export const CoinsBlockSkeleton = () => {
  const Block = () => {
    return (
      <div className={style.item}>
        <div className={style.cryptoLeftSide}>
          <div>
            <Skeleton
              height={34}
              width={34}
              style={{ marginLeft: 1, borderRadius: 50 }}
            />
          </div>
          <Skeleton height={15} width={50} style={{ marginTop: 8 }} />
          <Skeleton height={15} width={40} style={{ marginTop: 6 }} />
        </div>
        <div className={style.cryptoRightSide}>
          <div style={{display: 'flex', justifyContent: 'center' }}>
            <Skeleton height={20} width={130} />
          </div>
          <div>
            <Skeleton height={58} width={130} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <SkeletonTheme baseColor="#2b2b2b" highlightColor="#dabdab">
        <div className={style.coins}>
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </div>
      </SkeletonTheme>
    </>
  );
};

export const ArticlesBlockSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#2b2b2b" highlightColor="#dabdab">
      <div className={style.articles}>
        <div className={style.articlesLeft}>
          <h2>Top Articles</h2>
          <div>
            <a>
              <div>
                <Skeleton height={140} width={258} />
              </div>
              <div>
                <Skeleton height={20} width={258} count={2} />
              </div>
              <div>
                <Skeleton height={20} width={100} />
              </div>
            </a>
            <a>
              <div>
                <Skeleton height={140} width={258} />
              </div>
              <div>
                <Skeleton height={20} width={258} count={2} />
              </div>
              <div>
                <Skeleton height={20} width={100} />
              </div>
            </a>
          </div>
        </div>

        <div className={style.articlesRight}>
          <a>
            <h2>Recent Articles</h2>
          </a>
          <a>
            <div>
              <div className={style.articlesRightImg}>
                <Skeleton height={60} width={60} style={{ borderRadius: 50 }} />
              </div>
            </div>
            <div>
              <div>
                <Skeleton height={20} width={450} />
              </div>
              <div>
                <div>
                  <Skeleton height={20} width={250} />
                  <Skeleton height={19} width={80} />
                </div>
              </div>
            </div>
          </a>

          <a>
            <div>
              <div className={style.articlesRightImg}>
                <Skeleton height={60} width={60} style={{ borderRadius: 50 }} />
              </div>
            </div>
            <div>
              <div>
                <Skeleton height={20} width={450} />
              </div>
              <div>
                <div>
                  <Skeleton height={20} width={250} />
                  <Skeleton height={19} width={80} />
                </div>
              </div>
            </div>
          </a>

          <a>
            <div>
              <div className={style.articlesRightImg}>
                <Skeleton height={60} width={60} style={{ borderRadius: 50 }} />
              </div>
            </div>
            <div>
              <div>
                <Skeleton height={20} width={450} />
              </div>
              <div>
                <div>
                  <Skeleton height={20} width={250} />
                  <Skeleton height={19} width={80} />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export const MarketCapSkeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#4e4e4e" highlightColor="#dabdab">
        <div>
          <Skeleton height={23} width={220} />
        </div>
      </SkeletonTheme>
    </>
  );
};
export const VolumeSkeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#4e4e4e" highlightColor="#dabdab">
        <div>
          <Skeleton height={23} width={160} />
        </div>
      </SkeletonTheme>
    </>
  );
};
export const ActiveCoinsSkeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#4e4e4e" highlightColor="#dabdab">
        <div>
          <Skeleton height={23} width={65} />
        </div>
      </SkeletonTheme>
    </>
  );
};
