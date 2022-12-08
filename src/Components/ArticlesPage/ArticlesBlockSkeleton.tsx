import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import style from "./Articles.module.scss";

export const ArticlesBlockSkeleton = () => {
  const articles: Array<string> = [];
  articles.length = 10;

  return (
    <SkeletonTheme baseColor="#2b2b2b" highlightColor="#dabdab">
      <ul className={style.articlesBlock}>
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </ul>
    </SkeletonTheme>
  );
};

function Block() {
  return (
    <li className={style.allArticlesLink}>
      <div className={style.articlesImage}>
        <Skeleton height={"12rem"} width={"100%"} />
      </div>
      <div className={style.articlesTitleDate}>
        <Skeleton height={"1rem"} width={"100%"} />
        <Skeleton height={"1rem"} width={"100%"} />
        <Skeleton height={"1rem"} width={"35%"} />
      </div>
    </li>
  );
}
