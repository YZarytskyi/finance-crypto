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
          <div style={{ display: "flex", justifyContent: "center" }}>
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
        <section className={style.coins}>
          <ul className={style.coinsList}>
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
          </ul>
        </section>
      </SkeletonTheme>
    </>
  );
};

export const ArticlesBlockSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#2b2b2b" highlightColor="#dabdab">
      <section className={style.articles}>
        <div className={style.articlesLeft}>
          <a>
            <h2>Top Articles</h2>
          </a>
          <ul className={style.articlesLeftList}>
            <li>
              <a className={style.articlesLeftLink}>
                <div>
                  <Skeleton height={140} width={256} />
                </div>
                <div>
                  <Skeleton height={20} width={256} count={2} />
                </div>
                <div>
                  <Skeleton height={20} width={100} />
                </div>
              </a>
            </li>
            <li>
              <a>
                <div>
                  <Skeleton height={140} width={256} />
                </div>
                <div>
                  <Skeleton height={20} width={256} count={2} />
                </div>
                <div>
                  <Skeleton height={20} width={100} />
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className={style.articlesRight}>
          <div>
            <h2 className={style.articlesRightTitle}>Recent Articles</h2>
          </div>
          <ul className={style.articlesRightList}>
            <li>
              <div className={style.articlesRightLink}>
                <div className={style.articlesRightImg}>
                  <Skeleton
                    height={59}
                    width={59}
                    style={{ borderRadius: 50 }}
                  />
                </div>
                <div className={style.articlesRightDescription}>
                  <p>
                    <Skeleton height={15} width={"100%"} />
                  </p>
                  <p style={{ display: "block" }}>
                    <Skeleton height={15} width={"60%"} />
                    <Skeleton height={14} width={"25%"} />
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className={style.articlesRightLink}>
                <div className={style.articlesRightImg}>
                  <Skeleton
                    height={60}
                    width={60}
                    style={{ borderRadius: 50 }}
                  />
                </div>
                <div className={style.articlesRightDescription}>
                  <p>
                    <Skeleton height={15} width={"100%"} />
                  </p>
                  <p style={{ display: "block" }}>
                    <Skeleton height={15} width={"60%"} />
                    <Skeleton height={14} width={"25%"} />
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className={style.articlesRightLink}>
                <div className={style.articlesRightImg}>
                  <Skeleton
                    height={60}
                    width={60}
                    style={{ borderRadius: 50 }}
                  />
                </div>
                <div className={style.articlesRightDescription}>
                  <p>
                    <Skeleton height={15} width={450} />
                  </p>
                  <p style={{ display: "block" }}>
                    <Skeleton height={15} width={"60%"} />
                    <Skeleton height={14} width={"25%"} />
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
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

const CarouselArticleItem = () => {
  return (
    <li>
      <a className={style.articlesLink}>
        <Skeleton height={18} width={240} style={{marginLeft: 5}} />
        <Skeleton height={18} width={240} style={{marginLeft: 5}} />
        <Skeleton height={16} width={110} style={{marginLeft: 5}} />
      </a>
    </li>
  );
};

export const CarouselArticleSkeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#4e4e4e" highlightColor="#dabdab">
        <CarouselArticleItem />
        <CarouselArticleItem />
        <CarouselArticleItem />
      </SkeletonTheme>
    </>
  );
};
