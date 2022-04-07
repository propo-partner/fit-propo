import Link from 'next/link'
import CommonBox3 from '../components/commonBox3'
import Layout from '../components/Layout'
import styles from '../styles/common.module.css'

export default function UnsubscibeComplete () {
  return (
    <Layout>
      <section>
        <h2 className={`${styles.c_title_center} ${styles.mb12}`}>メール配信を停止しました。</h2>
        <p className={`${styles.c_text} ${styles.mb24} ${styles.align_center_pc}`}>
        ご利用いただきありがとうございました。
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
