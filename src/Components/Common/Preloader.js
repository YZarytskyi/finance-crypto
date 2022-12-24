import style from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <p>Loading</p>
      <div>
        <span className={style.line + ' ' + style.line1}></span>
        <span className={style.line + ' ' + style.line2}></span>
        <span className={style.line + ' ' + style.line3}></span>
        <span className={style.line + ' ' + style.line4}></span>
        <span className={style.line + ' ' + style.line5}></span>
        <span className={style.line + ' ' + style.line6}></span>
        <span className={style.line + ' ' + style.line7}></span>
        <span className={style.line + ' ' + style.line8}></span>
        <span className={style.line + ' ' + style.line9}></span>
      </div>
    </div>
  );
};

export default Preloader;
