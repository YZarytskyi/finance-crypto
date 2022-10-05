import style from "./Home.module.scss";
import Carousel from "./Carousel";
import Coins from "./Coins";
import Articles from "./Articles";

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
