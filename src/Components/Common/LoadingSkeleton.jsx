import React from "react";
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
              style={{ marginLeft: 4, borderRadius: 50 }}
            />
          </div>
          <Skeleton height={15} width={50} />
          <Skeleton height={15} width={40} style={{ marginLeft: 2 }} />
        </div>
        <div className={style.cryptoRightSide}>
          <div>
            <Skeleton height={20} width={130} />
          </div>
          <div>
            <Skeleton height={57} width={130} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <SkeletonTheme baseColor="#4e4e4e" highlightColor="#dabdab">
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
    <SkeletonTheme baseColor="#4e4e4e" highlightColor="#dabdab">
      <div className={style.articles}>
        <div className={style.articlesLeft}>
          <div className="w-100 text-left ml-7 text-xl">Top Articles</div>
          <div className="flex ml-7 mt-3">
            <div className="w-64 mr-10">
              <div>
                <Skeleton height={140} width={258} />
              </div>
              <div className="text-left mt-1 w-72">
                <Skeleton height={20} width={258} />
                <Skeleton height={20} width={258} />
              </div>
              <div className="text-left mt-1 text-zinc-600 text-sm">
                <Skeleton height={16} width={100} />
              </div>
            </div>

            <div className="w-64 mx-10">
              <div>
                <Skeleton height={140} width={258} />
              </div>
              <div className="text-left mt-1 w-72">
                <Skeleton height={20} width={258} />
                <Skeleton height={20} width={258} />
              </div>
              <div className="text-left mt-1 text-zinc-600 text-sm">
                <Skeleton height={16} width={100} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.articlesRight}>
          <div className="text-left ml-7 text-xl w-11/12">Recent Articles</div>
          <div className={style.articlesRightList}>
            <div>
              <div>
                <Skeleton height={60} width={60} style={{ borderRadius: 50 }} />
              </div>
            </div>
            <div>
              <div className="text-left ml-5 text-base">
                <Skeleton height={20} width={450} />
              </div>
              <div className="text-left mt-1 ml-5 text-zinc-600 text-sm">
                <Skeleton height={20} width={250} />
                <Skeleton height={15} width={80} />
              </div>
            </div>
          </div>

          <div className={style.articlesRightList}>
            <div>
              <div>
                <Skeleton height={60} width={60} style={{ borderRadius: 50 }} />
              </div>
            </div>
            <div>
              <div className="text-left ml-5 text-base">
                <Skeleton height={20} width={450} />
              </div>
              <div className="text-left mt-1 ml-5 text-zinc-600 text-sm">
                <Skeleton height={20} width={250} />
                <Skeleton height={15} width={80} />
              </div>
            </div>
          </div>

          <div className={style.articlesRightList}>
            <div>
              <div>
                <Skeleton height={60} width={60} style={{ borderRadius: 50 }} />
              </div>
            </div>
            <div>
              <div className="text-left ml-5 text-base">
                <Skeleton height={20} width={450} />
              </div>
              <div className="text-left mt-1 ml-5 text-zinc-600 text-sm">
                <Skeleton height={20} width={250} />
                <Skeleton height={15} width={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};
