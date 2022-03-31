import Link from 'next/link'
import CommonBox2 from '../component/commonBox2'
import Layout from '../component/Layout'
import styles from '../styles/common.module.css'

export default function TopicComplete () {
  return (
    <Layout>
      <section>
        <h2 className={styles.c_title}>あなたの興味を登録しました。</h2>
        <p className={`${styles.c_text} ${styles.mb24} ${styles.align_center_pc}`}>
        最初のおすすめエピソードをお届けしますので、登録いただいたメールの受信ボックスをご確認ください。
        </p>
        <div className={`${styles.c_roundBtn} ${styles.mb24} ${styles.align_center_pc}`}>
					<a href="https://propo.fm/" className={styles.topChannel__btn__link}>
            <span>トップページに戻る</span>
            <img className={styles.ico_right} src="/images/ico_back.svg" />
          </a>
				</div>
        <p className={`${styles.c_text} ${styles.mb80}`}>
        メールが届かない方は、迷惑メールなどに振り分けられていないかをご確認の上、<a className={styles.c_textlink} href="https://propo.fm/service#contact" target="_blank" rel="noopener noreferrer">お問い合わせ</a>ください。
        </p>
      </section>
      <CommonBox2 />
    </Layout>
  )
}
