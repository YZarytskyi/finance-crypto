import Carousel from "./Carousel";
import Coins from "./Coins";
import Articles from "pages/Home/Articles";
import style from "./Home.module.scss";

const Home = () => {
 
  return (
    <div className={style.home}>
      <Carousel />
      <Coins />
      <Articles />
    </div>
  );
};

export default Home;
