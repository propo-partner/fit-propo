import Link from 'next/link'
import CommonBox4 from '../../../components/commonBox4'
import Layout from '../../../components/Layout'
import styles from '../../../styles/common.module.css'
import { AudioPlayer } from '../../../components/AudioPlayer'

export default function LikeUnlikeComplete () {

  return (
    <>
      <section>
        <h2 className={`${styles.c_title_center} ${styles.mb12}`}>フィードバック<br />ありがとうございました！</h2>
        <p className={`${styles.c_text} ${styles.mb24} ${styles.align_center_pc}`}>
        貴重なフィードバックをありがとうございました！<br />
        参考にさせていただきます。
        </p>
        <div className={`${styles.c_roundBtn} ${styles.mb80} ${styles.align_center_pc}`}>
          <Link href="/episode/radiohistory">
					<a className={styles.c_roundBtn_inner}>
            <span>再生ページに戻る</span>
            <img className={`${styles.ico_right} ${styles.ico_back}`} src="/images/ico_back.svg" />
          </a>
          </Link>
				</div>
      </section>
      <CommonBox4 />
      {/* <AudioPlayer /> */}
    </>
  )
}
