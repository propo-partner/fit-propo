import styles from '../styles/header.module.css'

export default function Header () {
  return (
    <>
      <div className={styles.header_bgWrap}>
        <header id="header" className={`${styles.header} ${styles.row}"`}>
          <div className={styles.header__brand}>
              <a href="https://propo.fm">
                <img src="/images/propofit_logo.svg" alt="声に触れる、心ひろがる。 | PROPO.FM" />
              </a>
          </div>
          {/* <nav className={`${header__nav} ${font_en}`}>
          <ul className={`${header__nav__list} ${global-nav-list}`}>
            <li className={`${global-nav-list__item} ${nav-current}`}><a href="https://propo.fm/">Top</a></li>
            <li className={global-nav-list__item}><a href="https://propo.fm/channels/all">All Channels</a>
              <ul className={global-nav-second-list}>
                <li><a href="https://propo.fm/episodes/all">All Episodes</a></li>
              </ul>
            </li>
            <li className={global-nav-list__item}>
              <a href="https://mg.propo.fm/">Magazine</a>
              <ul className={`${global-nav-second-list} ${second-list-long}`}>
                <li><a href="https://mg.propo.fm/category/podcasting">Podcasting</a></li>
                <li><a href="https://mg.propo.fm/category/hotepisodes">Hot Episodes</a></li>
                <li><a href="https://mg.propo.fm/category/usecase">Usecase</a></li>
                <li><a href="https://mg.propo.fm/category/news">News</a></li>
                <li><a href="https://mg.propo.fm/category/interview">Interview</a></li>
              </ul>
            </li>
            <li className={global-nav-list__item}><a href="https://propo.fm/service">Service</a></li>
            <li className={`${global-nav-list__item} ${gloval-nav-dropdown}`}>
              <a href="https://mg.propo.fm/about/">About PROPO</a>
                <ul className={global-nav-second-list}>
                <li><a href="https://mg.propo.fm/community/">Community</a></li>
                </ul>
              </li>
           </ul>
          </nav> */}
        </header>
      </div>
    </>



  )
}
