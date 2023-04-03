import style from './Preloader.module.scss'

interface PreloaderMainProps {
  className?: string
}

export const Preloader = ({ className = 'main' }: PreloaderMainProps): JSX.Element => {
  return (
    <>
      <div className={style[className]}>
        <p className={style.text}>Loading</p>
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
    </>
  )
}
