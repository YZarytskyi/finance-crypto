import style from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <div className={style.preloader1}>
        <div>Loading</div>
        <span className={style.line + " " + style.line1}></span>
        <span className={style.line + " " + style.line2}></span>
        <span className={style.line + " " + style.line3}></span>
        <span className={style.line + " " + style.line4}></span>
        <span className={style.line + " " + style.line5}></span>
        <span className={style.line + " " + style.line6}></span>
        <span className={style.line + " " + style.line7}></span>
        <span className={style.line + " " + style.line8}></span>
        <span className={style.line + " " + style.line9}></span>
      </div>

      <div className={style.preloader2}>
        <span className={style.line + " " + style.line1}></span>
        <span className={style.line + " " + style.line2}></span>
        <span className={style.line + " " + style.line3}></span>
        <span className={style.line + " " + style.line4}></span>
        <span className={style.line + " " + style.line5}></span>
        <span className={style.line + " " + style.line6}></span>
        <span className={style.line + " " + style.line7}></span>
        <span className={style.line + " " + style.line8}></span>
        <span className={style.line + " " + style.line9}></span>
        <div>Loading</div>
      </div>
    </div>
  );
};

export default Preloader;
