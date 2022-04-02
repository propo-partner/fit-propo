import styles from '../styles/common.module.css'

export default function CommonBox2 () {
  return (
    <>
      <section className={`${styles.c_greybox} ${styles.c_brandbox}`}>
        <div className={`${styles.c_brandbox_upper} ${styles.pb24}`}>
          <div className={`${styles.c_propologo} ${styles.mb24}`}>
            <img className={styles.c_img_logo} src="/images/propofmBlack.png" alt="声に触れる、心ひろがる。 | PROPO.FM" />
            <p className={`${styles.c_underlogo_text}`}>声に触れる、心ひろがる。</p>
          </div>
          <p className={`${styles.c_text}`}>
            PROPO.FM（プロポ）は、あなたの心に響くポッドキャスト番組を届けるサービスです。<br />
            声の力を探求し、驚き・発見・感動・優しさを紡ぐ番組で、あなたの心に新しいつながりをひろげます。
          </p>
        </div>
        <div className={styles.c_brandbox_lower}>
          <p className={`${styles.c_text}  ${styles.align_center}`}>
          PROPO.FM に登録済の方はこちらから<a className={styles.c_textlink} href="/login">ログイン</a>
          </p>
        </div>
      </section>
    </>
  )
}
