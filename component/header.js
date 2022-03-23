import styles from '../styles/header.module.css'

export default function Header () {
  return (
    <>
      <div className={styles.header_bgWrap}>
        <header id="header" className={`${styles.header} ${styles.row}"`}>
          <div className={styles.header__brand}>
              <a href="https://propo.fm">
                <img src="/images/propofmBlack.png" alt="声に触れる、心ひろがる。 | PROPO.FM" />
              </a>
          </div>
        </header>
      </div>
    </>



  )
}
