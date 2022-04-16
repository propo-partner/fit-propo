import { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import clsx from 'clsx'
import styles from '../styles/header.module.css'

export default function Header () {
  const [ openMenu, setOpenMenu ] = useState(false)
  const drwFunc = () => {
    setOpenMenu(!openMenu);
  }

	const classes = {
		base: 'menuList_categoryItem',
		selected: 'menuList_categoryItem active' ,
		notSelected: '',
	}

	const tabpanelClasses = {
		base: 'menuList_lv2Item',
		selected: 'menuList_lv2Item active' ,
		notSelected: '',
	}

	const [tabIndex, setTabIndex] = useState(0)

  return (
    <>
      <div className={styles.header_bgWrap}>
        <header className={`${styles.header}`}>
          <div className={styles.header__brand}>
              <a href="https://propo.fm">
                <img src="/images/propofit_logo.svg" alt="声に触れる、心ひろがる。 | PROPO.FM" />
              </a>
          </div>
          <nav className={`${styles.header__nav} ${styles.font_en}`}>
          <ul className={`${styles.header__nav__list} ${styles.global_nav_list}`}>
            <li className={`${styles.global_nav_list__item}`}>
              <a href="https://propo.fm/">Top</a>
            </li>
            <li className={styles.global_nav_list__item}>
              <a href="https://propo.fm/channels/all">All Channels</a>
              <ul className={styles.global_nav_second_list}>
                <li>
                  <a href="https://propo.fm/episodes/all">
                    All Episodes
                  </a>
                </li>
              </ul>
            </li>
            <li className={`${styles.global_nav_list__item}`}>
              <a href="https://propo.fm/">Ranking</a>
            </li>
            <li className={`${styles.global_nav_list__item} ${styles.nav_current}`}>
              <a href="https://propo.fm/">Fit</a>
            </li>
            <li className={styles.global_nav_list__item}>
              <a href="https://mg.propo.fm/">Magazine</a>
              <ul className={`${styles.global_nav_second_list} ${styles.second_list_long}`}>
                <li><a href="https://mg.propo.fm/category/podcasting">Podcasting</a></li>
                <li><a href="https://mg.propo.fm/category/hotepisodes">Hot Episodes</a></li>
                <li><a href="https://mg.propo.fm/category/usecase">Usecase</a></li>
                <li><a href="https://mg.propo.fm/category/news">News</a></li>
                <li><a href="https://mg.propo.fm/category/interview">Interview</a></li>
              </ul>
            </li>
            <li className={styles.global_nav_list__item}><a href="https://propo.fm/service">Service</a></li>
            <li className={`${styles.global_nav_list__item}`}>
              <a href="https://mg.propo.fm/about/">About</a>
                <ul className={styles.global_nav_second_list}>
                <li><a href="https://mg.propo.fm/community/">Community</a></li>
                </ul>
              </li>
           </ul>
          </nav>
          {/* <!-- /.PC nav --> */}

          <div className={`${styles.sp_nav}` }>
					<ul className={styles.sp_nav__menu}>
						<li className={`${styles.drwBtn}`}>
							<div className={`${styles.drwBtn__line} ${openMenu ? styles.active : undefined}`} onClick={() => drwFunc()}>
								<div></div>
								<div></div>
							</div>
							<p className={`${styles.font_en} ${styles.drwBtn__text}`}>
								<span className={`${styles.drwBtn__text__menu} ${openMenu ? styles.active : undefined}`}>MENU</span>
								<span className={`${styles.drwBtn__text__close} ${openMenu ? styles.active : undefined}`}>CLOSE</span>
							</p>
						</li>
					</ul>
				</div>
				<nav className={`${styles.drwNav} ${openMenu ? styles.active : undefined}`}>
					<div className={`${styles.drwNav__wrap} ${styles.font_en}`}>
						<a className={styles.drwNav__wrap__logo} href="https://propo.fm/"><img 
								src="https://propo.fm/image/propofmWhite.png" alt="propologo"/></a>
						<div className={styles.drwNav__wrap__flex}>
							<div className={styles.drwNav__wrap__menu}>
								<div className={styles.menuTitle}><a href="https://propo.fm/channels/all">All Channels</a></div>
							</div>
							<div className={styles.drwNav__wrap__menu}>
								<div className={styles.menuTitle}><a href="https://propo.fm/Ranking">Ranking</a></div>
							</div>
							<div className={styles.drwNav__wrap__menu}>
								<div className={styles.menuTitle}><a href="https://fit.propo.fm/signup">Fit</a></div>
							</div>
							<div className={styles.drwNav__wrap__menu}>
								<div className={styles.menuTitle}><a href="https://propo.fm/service">Service</a></div>
							</div>
							<div className={`${styles.drwNav__wrap__menu} ${styles.wide}`}>
								<div className={styles.menuTitle}><a href="https://mg.propo.fm/">MAGAZINE</a></div>
								<Tabs className={styles.menuList} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
									<TabList className={styles.menuList_category}>
										<Tab 
											className={clsx([
												classes.base,
												tabIndex === 0 ? classes.selected : classes.notSelected,
											])}>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.72 107.72">
												<path 
													d="M50.32,80.68v-5.8a56.73,56.73,0,0,1-5.72-1.16,18.47,18.47,0,0,1-13-16.2c-.19-3.28-.19-6.57-.2-9.85q0-11.88,0-23.77A17.15,17.15,0,0,1,48.6,6.45c3.64-.07,7.29-.06,10.93,0a17,17,0,0,1,17,14.11,18.25,18.25,0,0,1,.3,3.3c0,10.54.07,21.08,0,31.61A18.9,18.9,0,0,1,60.85,74.4c-1.28.22-2.58.25-3.94.37v5.77a18.55,18.55,0,0,0,9.28-1.63c8.16-3.59,12.93-9.87,14-18.7a79.53,79.53,0,0,0,.11-9.14A2.84,2.84,0,0,1,82.41,48a2.62,2.62,0,0,1,3.16,1.6,3.21,3.21,0,0,1,.24,1c0,4.7.24,9.41-.91,14.05a28.35,28.35,0,0,1-23,21c-1.6.23-3.22.36-4.93.55v9.62H75.4a2.87,2.87,0,0,1,3.11,2,2.59,2.59,0,0,1-1.68,3.21,5.63,5.63,0,0,1-1.63.23q-21.16,0-42.31,0c-1.78,0-2.83-.67-3.23-2a2.58,2.58,0,0,1,1.68-3.2,6.06,6.06,0,0,1,1.75-.24c5.23,0,10.46,0,15.69,0h1.51v-9.6c-2-.27-4-.46-5.94-.83-11.16-2.12-20.55-11.93-22-23.24a107.53,107.53,0,0,1-.48-11.37,2.83,2.83,0,0,1,2.79-3,2.92,2.92,0,0,1,2.67,3.09c.05,2.34,0,4.68,0,7A22.81,22.81,0,0,0,46.82,80.37C47.94,80.52,49.07,80.57,50.32,80.68Zm-5.48-60.1c0-2.45-.63-3.09-3.08-3.1s-3.14.61-3.15,3.14.63,3.08,3.07,3.09S44.83,23.1,44.84,20.58Zm12.36,0c0-2.42-.64-3-3.13-3.05S51,18.1,51,20.67c0,2.41.64,3,3.12,3S57.19,23.09,57.2,20.53Zm9.19-3.05c-2.42,0-3,.64-3.06,3.11s.61,3.12,3.17,3.12,3-.64,3.06-3.11S69,17.49,66.39,17.48ZM44.84,30.07c0-2.43-.64-3.07-3.09-3.08s-3.14.61-3.14,3.15.63,3.07,3.09,3.08S44.83,32.61,44.84,30.07Zm9.31,3.15c2.41,0,3-.64,3.05-3.12S56.58,27,54,27s-3,.64-3.05,3.12S51.59,33.22,54.15,33.22Zm9.18-3.06c0,2.42.64,3.05,3.11,3.06s3.11-.61,3.12-3.17S68.92,27,66.45,27,63.33,27.6,63.33,30.16Zm-24.72,9.5c0,2.43.63,3.06,3.1,3.07s3.12-.61,3.13-3.16-.64-3.06-3.1-3.07S38.61,37.11,38.61,39.66Zm18.59-.11c0-2.42-.64-3-3.12-3S51,37.12,51,39.68s.64,3,3.12,3S57.19,42.11,57.2,39.55Zm12.36,0c0-2.43-.64-3.06-3.1-3.07s-3.12.61-3.13,3.16.64,3.06,3.1,3.07S69.55,42.12,69.56,39.57ZM44.84,49.05c0-2.41-.64-3-3.13-3s-3.1.62-3.1,3.18.64,3,3.12,3.05S44.83,51.62,44.84,49.05Zm9.26,3.19c2.45,0,3.09-.63,3.1-3.08S56.59,46,54.06,46,51,46.64,51,49.08,51.58,52.23,54.1,52.24Zm9.23-3.06c0,2.42.64,3,3.11,3.06s3.11-.62,3.12-3.17-.64-3-3.11-3.06S63.33,46.62,63.33,49.18ZM41.71,55.52c-2.45,0-3.09.62-3.1,3.07s.61,3.15,3.13,3.15,3.09-.62,3.1-3.06S44.23,55.52,41.71,55.52ZM57.2,58.6c0-2.44-.64-3.07-3.09-3.08S51,56.12,51,58.66s.63,3.08,3.09,3.08S57.19,61.14,57.2,58.6Zm12.36,0c0-2.42-.64-3-3.11-3.06s-3.12.61-3.12,3.17.64,3.05,3.11,3.05S69.55,61.13,69.56,58.58Z" />
											</svg>
											<p>Podcasting</p>
										</Tab>
										<Tab 
											className={clsx([
												classes.base,
												tabIndex === 1 ? classes.selected : classes.notSelected,
											])}>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.72 107.72">
												<path 
													d="M21.33,103.24c.13-.66.24-1.32.4-2,2.8-11,5.59-22,8.44-33a2.57,2.57,0,0,0-.9-3c-5-4.12-9.92-8.31-14.86-12.49q-5.89-5-11.78-10a4,4,0,0,1-.53-.8,10.48,10.48,0,0,1,1.7-.4c5.58-.38,11.16-.72,16.74-1.08,5.89-.38,11.77-.78,17.65-1.14A1.84,1.84,0,0,0,40,37.92Q46.47,21.54,53,5.17A8.08,8.08,0,0,1,53.78,4a6,6,0,0,1,.87,1.17q6.54,16.37,13,32.75a1.85,1.85,0,0,0,1.82,1.36q7.73.42,15.44.92c6.36.41,12.72.86,19.08,1.31a12.66,12.66,0,0,1,1.6.34,6.14,6.14,0,0,1-.72.94q-8.84,7.52-17.69,15c-3.07,2.61-6.1,5.24-9.2,7.81a1.74,1.74,0,0,0-.64,2C78.68,72.77,80,77.9,81.26,83q2.43,9.53,4.86,19c.1.39.1.81.2,1.63-1-.5-1.61-.8-2.21-1.17q-10.26-6.47-20.5-13C60.73,87.75,57.85,85.93,55,84a1.88,1.88,0,0,0-2.37,0q-14.58,9.33-29.21,18.57c-.56.35-1.18.61-1.77.91ZM54,22h-.41c-.47,1.1-1,2.19-1.41,3.3C49.67,31.65,47.12,38,44.62,44.4a1.9,1.9,0,0,1-2.07,1.38c-1.09,0-2.18.17-3.26.23-5.41.3-10.82.57-16.23.88-1.4.08-2.8.27-4.43.42a8.9,8.9,0,0,0,.7.83c5.34,4.51,10.57,9.16,16.08,13.45,2.23,1.73,2.7,3.29,2,5.92-1.88,6.63-3.48,13.34-5.18,20-.11.42-.15.86-.29,1.65.82-.48,1.3-.75,1.77-1.05q9.41-6,18.82-11.93A2,2,0,0,1,54.87,76c5.6,3.58,11.22,7.12,16.83,10.67l4,2.53a12.54,12.54,0,0,0-.13-1.29c-1.9-7.48-3.79-15-5.74-22.45a2.15,2.15,0,0,1,.81-2.5Q79.57,55.51,88.44,48a3.69,3.69,0,0,0,.49-.78l-2.77-.18c-7-.44-13.94-.91-20.92-1.28a2.23,2.23,0,0,1-2.31-1.63c-2.49-6.39-5-12.75-7.58-19.12C54.94,24,54.47,23,54,22Z" />
											</svg>
											<p>Hot<br />Episodes</p>
										</Tab>
										<Tab
											className={clsx([
												classes.base,
												tabIndex === 2 ? classes.selected : classes.notSelected,
											])}>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.72 107.72">
												<path 
													d="M53.84,99.73c-3,0-6.09,0-9.13,0a7.56,7.56,0,0,1-7.52-5.49,10,10,0,0,1-.36-2.66c0-4.59-.1-9.17,0-13.75a11.73,11.73,0,0,0-2.24-7.4c-2.1-2.88-4.33-5.67-6.48-8.51a34.74,34.74,0,0,1-7-16C19,32.15,23.93,19.42,37.75,12.22a34.81,34.81,0,0,1,35.48,1.29A28.43,28.43,0,0,1,86.6,34c1.54,10-.48,19.17-6.57,27.34-2.26,3-4.63,6-6.88,9.06a11.77,11.77,0,0,0-2.29,7.49c.1,4.62,0,9.24,0,13.86a7.57,7.57,0,0,1-5,7.5,10.1,10.1,0,0,1-3.09.5C59.78,99.77,56.81,99.73,53.84,99.73Zm9-22c.25-1.7.39-3.27.73-4.8.94-4.18,3.37-7.56,5.92-10.88a97.17,97.17,0,0,0,6.63-9.22c3-5.16,3.56-10.9,2.89-16.78a20.14,20.14,0,0,0-7.21-13.94c-7.33-6-15.67-7.79-24.82-5.22-5.78,1.62-10.85,4.52-14.37,9.51C27.41,33.79,27.43,41.8,30.23,50c1.45,4.23,4.3,7.63,7.08,11,2.39,2.91,4.8,5.84,6,9.45.78,2.32,1.16,4.78,1.74,7.26h5.73V76.27c0-4.77,0-9.54,0-14.31,0-2.75,2.19-4.51,4.58-3.74A3.71,3.71,0,0,1,57.8,62q0,7.21,0,14.43v1.32Zm.07,8H44.8v5.92H62.9Z" />
											</svg>
											<p>Usecase</p>
										</Tab>
										<Tab
											className={clsx([
												classes.base,
												tabIndex === 3 ? classes.selected : classes.notSelected,
											])}>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.72 107.72">
												<path 
													d="M76.49,41.68h1.62c4.87,0,9.75,0,14.62,0,1,0,1.29.3,1.28,1.29,0,13.62,0,27.25,0,40.87A11.5,11.5,0,0,1,82.3,95.46c-3.08,0-6.18.19-9.25,0-15.4-1.07-30.82-.16-46.23-.46A13,13,0,0,1,13.73,81.83q-.06-30.69,0-61.37A8,8,0,0,1,22,12.19q23.06,0,46.12,0a8,8,0,0,1,8.33,8.38c0,6.5,0,13,0,19.5ZM69.72,88.12V86.57q0-32.8,0-65.61c0-1.9-.09-2-2-2H22.51c-1.91,0-2,.1-2,2q0,30.49,0,61a5.92,5.92,0,0,0,6.23,6.27H68.22C68.67,88.18,69.12,88.14,69.72,88.12Zm6.89-39.58V88.68h5.73c3.07,0,4.87-1.8,4.87-4.88q0-16.92,0-33.85c0-.44,0-.89-.06-1.41Z" />
												<path 
													d="M41.1,28.18c3.7,0,7.41,0,11.11,0,1,0,1.31.25,1.31,1.27q-.06,11.16,0,22.34c0,.94-.31,1.21-1.23,1.21q-11.18,0-22.34,0c-.91,0-1.25-.24-1.24-1.2q0-11.23,0-22.47c0-.88.31-1.15,1.16-1.14C33.61,28.2,37.35,28.18,41.1,28.18Zm5.54,17.93V35H35.57V46.11Z" />
												<path 
													d="M44.61,66c-4.83,0-9.65,0-14.48,0-1.05,0-1.51-.23-1.44-1.38a40,40,0,0,0,0-4.24c0-.82.19-1.19,1.11-1.19q14.79,0,29.58,0c.91,0,1.15.35,1.12,1.18,0,1.46-.07,2.92,0,4.37.06,1-.34,1.27-1.3,1.26C54.35,65.94,49.48,66,44.61,66Z" />
												<path 
													d="M44.73,71.18c4.82,0,9.65,0,14.48,0,.95,0,1.36.22,1.3,1.25-.07,1.45,0,2.91,0,4.37,0,.82-.2,1.19-1.11,1.19q-14.79,0-29.58,0c-.91,0-1.14-.36-1.12-1.19.05-1.46.07-2.92,0-4.37-.06-1,.35-1.26,1.3-1.25C34.91,71.2,39.82,71.18,44.73,71.18Z" />
											</svg>
											<p>News</p>
										</Tab>
										<Tab
											className={clsx([
												classes.base,
												tabIndex === 4 ? classes.selected : classes.notSelected,
											])}>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.72 107.72">
												<path 
													d="M55.39,7.8c14.73.32,26.46,11.48,26.5,26.51A26.16,26.16,0,0,1,55.36,60.84a26.15,26.15,0,0,1-26.43-26.5C28.93,19.54,40.44,8.15,55.39,7.8Zm0,8C45,15.52,36.81,24.58,36.77,34.22a18.64,18.64,0,1,0,37.28.14C74,23.92,65.16,15.45,55.42,15.78Z" />
												<path 
													d="M86.12,99.9a26.33,26.33,0,0,1-3,0,1.33,1.33,0,0,1-.94-.82c-.62-9.17-5.4-15.89-12.48-21.23a27.33,27.33,0,0,0-12.19-5.34A22.19,22.19,0,0,0,44.79,74C35.22,78.21,28.57,85,26,95.38a20,20,0,0,0-.43,3.54c0,.71-.28,1-1,1-2.05,0-4.1,0-6.15,0-.68,0-.84-.28-.81-1,.81-16.6,14.48-30,28.62-33.67,8.83-2.29,17.1-.59,24.8,4C79.87,74.58,86.17,82,89,92a48.83,48.83,0,0,1,1.12,7c0,.23-.49.75-.78.78C88.26,100,87.18,99.9,86.12,99.9Z" />
											</svg>
											<p>Interview</p>
										</Tab>
									</TabList>
									<div className={styles.menuList_itemWrap}>
										<TabPanel
											className={clsx([
												tabpanelClasses.base,
												tabIndex === 0 ? tabpanelClasses.selected : tabpanelClasses.notSelected,
											])}>
											<div className={styles.menuList_lv2Item__title}>
												<div className={styles.lv2ttl}><a href="https://mg.propo.fm/category/podcasting/">Podcasting</a></div>
												<p>音声コンテンツ・ポッドキャストの情報</p>
											</div>
											<div className={styles.menuList_lv3Item}>
												<div className={styles.lv3ttl}><a href="https://mg.propo.fm/podcasting-whynow/">なぜオーディオ戦略が必要か</a></div>
												<ul>
													<li><a href="https://mg.propo.fm/podcasting-attraction/">音声コンテンツの魅力</a></li>
													<li><a href="https://mg.propo.fm/podcasting-market/">ポッドキャストの市場規模</a></li>
												</ul>
											</div>
											<div className={styles.menuList_lv3Item}>
												<div className={styles.lv3ttl}><a href="https://mg.propo.fm/tag/knowledge/">ポッドキャストの基礎知識</a></div>
												<ul>
													<li><a href="https://mg.propo.fm/podcasting-about-podcast/">ポッドキャストとは？</a></li>
													<li><a href="https://mg.propo.fm/podcasting-application/">おすすめポッドキャストアプリ</a></li>
													<li><a href="https://mg.propo.fm/podcasting-application/">おすすめ音声コンテンツアプリ</a></li>
												</ul>
											</div>
											<div className={styles.menuList_lv3Item}>
												<div className={styles.lv3ttl}><a href="https://mg.propo.fm/how-to-podcasting/">ポッドキャストの始め方</a></div>
												<ul>
													<li><a href="https://mg.propo.fm/podcasting-how-to-start-a-podcast/">ポッドキャストを始める前に</a></li>
													<li><a href="https://mg.propo.fm/podcasting-purpose-and-targeting/">1. 目的・ターゲット</a></li>
													<li><a href="https://mg.propo.fm/podcasting-title-summary-thumbnail/" className={styles.lspace-5}>2.
															番組タイトル・紹介文・サムネイル</a></li>
													<li><a href="https://mg.propo.fm/podcasting-ideal-length-and-frequency/">3. エピソード時間・配信頻度</a>
													</li>
													<li><a href="https://mg.propo.fm/podcasting-format-and-script/">4. 番組フォーマット・台本</a></li>
													<li><a href="https://mg.propo.fm/podcasting-how-to-record-a-podcast/">5. 収録</a></li>
													<li><a href="https://mg.propo.fm/podcasting-editing-and-music/">6. 編集・音楽</a></li>
													<li><a href="https://mg.propo.fm/podcasting-episode-title-note-and-thumbnail/">7.
															エピソードタイトル・ノート</a></li>
													<li><a href="https://mg.propo.fm/podcasting-how-to-publish-a-podcast/">8. 配信方法</a></li>
													<li><a href="https://mg.propo.fm/podcasting-marketing-and-promotion/">9. マーケティング</a></li>
													<li><a href="https://mg.propo.fm/podcasting-how-to-manetize/">10. 収益化するには</a></li>
												</ul>
											</div>
											{/* <!-- 公開時非表示 --> */}
											{/* <!-- <div className={styles.menuList_lv3Item">
                          <div className={styles.lv3ttl"><a href="">ポッドキャストの収録方法</a></div>
                          </div>
                          <div className={styles.menuList_lv3Item">
                            <div className={styles.lv3ttl"><a href="">ポッドキャストのトレンド</a></div>
                          </div>--> */}
										</TabPanel>
										<TabPanel
											className={clsx([
												tabpanelClasses.base,
												tabIndex === 1 ? tabpanelClasses.selected : tabpanelClasses.notSelected,
											])}>

											<div className={styles.menuList_lv2Item__title}>
												<div className={styles.lv2ttl}><a href="https://mg.propo.fm/category/hotepisodes/">Hot Episodes</a></div>
												<p>PROPO.FM で厳選、おすすめのポッドキャスト</p>
											</div>
											<div className={styles.menuList_lv3Item}>
												<div className={styles.lv3ttl}><a href="https://mg.propo.fm/tag/hot-podcasts-for-social-culture/">社会・文化</a>
												</div>
												<ul className={styles.col2}>
													<li><a href="https://mg.propo.fm/hot-episodes-social-culture/">社会・文化</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-art/">アート</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-history/">歴史</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-design/">デザイン</a></li>
												</ul>
											</div>
											<div className={styles.menuList_lv3Item}>
												<div className={styles.lv3ttl}><a href="https://mg.propo.fm/tag/hot-podcasts-for-drama-movie/">エンタメ</a>
												</div>
												<ul className={styles.col2}>
													<li><a href="https://mg.propo.fm/hot-episodes-drama-behind-the-scenes/">舞台裏</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-drama-interview/">インタビュー</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-drama-pickup/">話題作ピックアップ</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-drama-movie-review/">映画レビュー</a></li>
												</ul>
											</div>
											<div className={styles.menuList_lv3Item}>
												<div className={styles.lv3ttl}><a href="https://mg.propo.fm/tag/hot-podcasts-for-woman/">女性におすすめ</a></div>
												<ul className={styles.col2}>
													<li><a href="https://mg.propo.fm/hot-episodes-woman-lifestyle/">ライフスタイル</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-woman-beauty/">ビューティー</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-woman-fashion/">ファッション</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-woman-work/">キャリア・仕事</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-woman-mentalcare/">メンタルケア</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-woman-gourmet/">グルメ</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-woman-health/">健康</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-woman-love_and_marriage/">恋愛・結婚</a></li>
													<li><a href="https://mg.propo.fm/hot-episodes-woman-relationships/">人間関係</a></li>
												</ul>
											</div>
											<div className={`${styles.menuList_lv3Item} ${styles.w50}`}>
												<div className={styles.lv3ttl}><a href="https://mg.propo.fm/hot-episodes-technology/">テクノロジー</a></div>
												<ul>
													<li><a href="https://mg.propo.fm/hot-episodes-technology/">テクノロジー</a></li>
												</ul>
											</div>
											<div className={`${styles.menuList_lv3Item} ${styles.w50}`}>
												<div className={styles.lv3ttl}><a href="https://mg.propo.fm/hot-podcasts-for-business-marketing/">ビジネス</a>
												</div>
												<ul>
													<li><a href="https://mg.propo.fm/hot-podcasts-for-business-marketing/">ビジネス</a></li>
												</ul>
											</div>
											<div className={styles.menuList_lv3Item}>
												<div className={styles.lv3ttl}><a href="https://mg.propo.fm/tag/hot-podcasts-for-news-trend/">ニュース</a>
												</div>
												<ul className={styles.col2}>
													<li><a href="https://mg.propo.fm/hot-podcasts-news-trend-specialfeature/">特集</a></li>
													<li><a href="https://mg.propo.fm/hot-podcasts-for-news-trend-regulardelivery/">定期配信</a></li>
													<li><a href="https://mg.propo.fm/hot-podcasts-news-trend-latest-trend/">トレンド</a></li>
												</ul>
											</div>
											<div className={styles.menuList_lv3Item}>
												<div className={styles.lv3ttl}><a href="https://mg.propo.fm/tag/hot-podcasts-for-english/">英会話</a></div>
												<ul className={styles.col2}>
													<li><a href="https://mg.propo.fm/hot-podcasts-english-for-beginner/">初級者におすすめ</a></li>
													<li><a href="https://mg.propo.fm/hot-podcasts-english-for-intermediate/">中〜上級者におすすめ</a></li>
													<li><a href="https://mg.propo.fm/smnl-english-for-overseas-programs/">学べる海外番組</a></li>
												</ul>
											</div>

										</TabPanel>
										<TabPanel
											className={clsx([
												tabpanelClasses.base,
												tabIndex === 2 ? tabpanelClasses.selected : tabpanelClasses.notSelected,
											])}>
											<div className={styles.menuList_lv2Item__title}>
												<div className={styles.lv2ttl}><a href="https://mg.propo.fm/category/usecase/">Usecase</a></div>
												<p>PROPO.FMから見る番組の狙いや特徴の情報</p>
											</div>
										</TabPanel>
										<TabPanel
											className={clsx([
												tabpanelClasses.base,
												tabIndex === 3 ? tabpanelClasses.selected : tabpanelClasses.notSelected,
											])}>

											<div className={styles.menuList_lv2Item__title}>
												<div className={styles.lv2ttl}><a href="https://mg.propo.fm/category/news/">News</a></div>
												<p>PROPO.FMからのお知らせ</p>
											</div>
										</TabPanel>
										<TabPanel
											className={clsx([
												tabpanelClasses.base,
												tabIndex === 4 ? tabpanelClasses.selected : tabpanelClasses.notSelected,
											])}>

											<div className={styles.menuList_lv2Item__title}>
												<div className={styles.lv2ttl}><a href="https://mg.propo.fm/category/interview/">Interview</a></div>
												<p>ポッドキャスト配信者へのインタビュー</p>
											</div>
										</TabPanel>
									</div>
								</Tabs>
							</div>
						</div>
						<div className={styles.drwNav__wrap__menu}>
								<div className={styles.menuTitle}><a href="https://mg.propo.fm/about/">About</a></div>
						</div>

						<div className={`${styles.drwNav__wrap__menu} ${styles.drw_sns}`}>
							<a className={styles.drwNav__wrap__menu__fb} href="https://www.facebook.com/propo.fm/" target="_blank" rel="noopener noreferrer">
								<svg className={styles.ico_fb} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
									<g transform="translate(-608.000000, -339.000000)">
										<path
											d="M620.25,340.9375 L620.25,350.5625 C620.25,350.927085 620.122397,351.236978 619.867188,351.492188 C619.611978,351.747397 619.302085,351.875 618.9375,351.875 L616.613281,351.875 L616.613281,347.035156 L618.253906,347.035156 L618.5,345.175781 L616.613281,345.175781 L616.613281,344 C616.613281,343.708332 616.667968,343.489584 616.777344,343.34375 C616.923178,343.179687 617.169269,343.097656 617.515625,343.097656 L618.5,343.097656 L618.5,341.457031 C618.117186,341.402343 617.643232,341.375 617.078125,341.375 C616.348955,341.375 615.770184,341.589191 615.341797,342.017578 C614.913409,342.445966 614.699219,343.042965 614.699219,343.808594 L614.699219,345.175781 L613.03125,345.175781 L613.03125,347.035156 L614.699219,347.035156 L614.699219,351.875 L609.3125,351.875 C608.947915,351.875 608.638022,351.747397 608.382812,351.492188 C608.127603,351.236978 608,350.927085 608,350.5625 L608,340.9375 C608,340.572915 608.127603,340.263022 608.382812,340.007812 C608.638022,339.752603 608.947915,339.625 609.3125,339.625 L618.9375,339.625 C619.302085,339.625 619.611978,339.752603 619.867188,340.007812 C620.122397,340.263022 620.25,340.572915 620.25,340.9375 Z" ></path>
									</g>
								</svg>
								{/* <!--<img src="image/facebook.png" alt="facebook">--> */}
							</a>
							<a className={styles.drwNav__wrap__menu__twitter} href="https://twitter.com/PROPOFM" target="_blank" rel="noopener noreferrer">
								{/* <i className={fab fa-twitter"></i> */}
							</a>
						</div>
					</div>
				</nav>
          {/* <!-- /.SP nav --> */}

        </header>
      </div>
    </>



  )
}
