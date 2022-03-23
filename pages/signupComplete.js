import Link from 'next/link'
import Layout from '../component/Layout'
import styles from '../styles/common.module.css'

export default function SignupComplete () {
  return (
    <Layout>
      <section>
        <h2 className={styles.c_title}>受信ボックスをご確認ください</h2>
        <p className={`${styles.c_text} ${styles.mb24}`}>
        メール登録いただき、ありがとうございました。<br></br>
        ご登録のメールアドレスへ、登録完了メールをお届けしますので、受信ボックスをご確認ください。
        </p>
        <div className={`${styles.roundBtn} ${styles.mb24}`}>
					<a href="https://propo.fm/" className={styles.topChannel__btn__link}>
            <span>トップページに戻る</span>
            <img className={styles.ico_right} src="/images/ico_back.svg" />
          </a>
				</div>
        <p className={`${styles.c_text} ${styles.mb80}`}>
        メールが届かない方は、迷惑メールなどに振り分けられていないかをご確認の上、<a className={styles.c_textlink} href="https://propo.fm/" target="_blank">お問い合わせ</a>ください。
        </p>
      </section>
      <section className={styles.c_greybox}>
        <div>
        <img className={styles.c_img_logo} src="/images/propofmBlack.png" alt="声に触れる、心ひろがる。 | PROPO.FM" />
        <p className={`${styles.c_underlogo_text} ${styles.mb24}`}>声に触れる、心ひろがる。</p>
        <p className={styles.c_text}>
          PROPO.FM（プロポ）は、あなたの心に響くポッドキャスト番組を届けるサービスです。<br />
          声の力を探求し、驚き・発見・感動・優しさを紡ぐ番組で、あなたの心に新しいつながりをひろげます。
        </p>
        </div>
      </section>
    </Layout>
  )
}
