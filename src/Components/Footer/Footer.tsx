import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.footerText}>&#169; 2022 CRYPTO LLC. All Rights Reserved.</p>
    </footer>
  )
}

export { Footer }
