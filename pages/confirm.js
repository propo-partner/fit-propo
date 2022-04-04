import Link from 'next/link'
import CommonBox3 from '../components/commonBox3'
import CommonBox4 from '../components/commonBox4'
import Layout from '../components/Layout'
import styles from '../styles/common.module.css'

export default function Confirm () {
  return (
    <Layout>
      <section>
        <h2 className={`${styles.c_title_center} ${styles.mb12}`}>受信ボックスをご確認ください</h2>
        <p className={`${styles.c_text} ${styles.mb24} ${styles.align_center_pc}`}>
        メール登録いただき、ありがとうございました。<br></br>
        ご登録のメールアドレスへ、登録完了メールをお届けしますので、受信ボックスをご確認ください。
        </p>
        <div className={`${styles.c_roundBtn} ${styles.mb24}`}>
					<a href="https://propo.fm/" className={styles.topChannel__btn__link}>
            <span>トップページに戻る</span>
            <img className={styles.ico_right} src="/images/ico_back.svg" />
          </a>
				</div>
        <p className={`${styles.c_text} ${styles.mb80} ${styles.align_center_pc}`}>
        メールが届かない方は、迷惑メールなどに振り分けられていないかをご確認の上、<a className={styles.c_textlink} href="https://propo.fm/service#contact" target="_blank" rel="noopener noreferrer">お問い合わせ</a>ください。
        </p>
      </section>
      <CommonBox3 />
    </Layout>
  )
}
