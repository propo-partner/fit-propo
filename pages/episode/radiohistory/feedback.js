import Link from 'next/link'
import CommonBox3 from '../../../components/commonBox3'
import Layout from '../../../components/Layout'
import styles from '../../../styles/common.module.css'

export default function LikeUnlikeComplete () {
  return (
    <Layout>
      <section>
        <h2 className={`${styles.c_title_center} ${styles.mb12}`}>フィードバック<br />ありがとうございました！</h2>
        <p className={`${styles.c_text} ${styles.mb24} ${styles.align_center_pc}`}>
        貴重なフィードバックをありがとうございました！<br />
        参考にさせていただきます。
        </p>
        <div className={`${styles.c_roundBtn} ${styles.mb80} ${styles.align_center_pc}`}>
					<a href="https://propo.fm/" className={styles.c_roundBtn_inner}>
            <span>トップページに戻る</span>
            <img className={styles.ico_right} src="/images/ico_back.svg" />
          </a>
				</div>
      </section>
      <CommonBox3 />
    </Layout>
  )
}
