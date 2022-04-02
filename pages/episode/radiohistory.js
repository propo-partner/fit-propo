import Layout from '../../components/Layout'
import styles from '../../styles/common.module.css'
import CommonBox4 from "../../components/commonBox4";

export default function EpisodePlay () {


  return (
    <Layout>
      <section>
        <div>
          <div>
            <img src="/images/thumbnail_rect01.png" alt="" />
          </div>
          <div className={`${styles.c_roundBtn} ${styles.mb24} ${styles.align_center_pc}`}>
              <a href="https://propo.fm/" className={styles.topChannel__btn__link}>
                <span>エピソードを聴く</span>
                <img className={styles.ico_right} src="/images/ico_check.svg" />
              </a>
              <input className={styles.c_submit_btn_hidden} type="submit" value="" />
            </div>
            <div>
              エピソードプレイバーが入ります
            </div>
        </div>
        <div className={`${styles.c_greybox} ${styles.c_brandbox}`}>
          <p>このエピソードは<br />あなたの興味に合いましたか？</p>
          <p className={`${styles.c_text}`}>
          フィードバックいただけると、もっと興味のあるエピソードをお届けすることができます。
          </p>
          <div>
            <div className={`${styles.c_roundBtn_white} ${styles.mb12}`}>
            <a href="https://propo.fm/" className={styles.topChannel__btn__link}>
              <span>イマイチ...</span>
            </a>
          </div>
          <div className={`${styles.c_roundBtn} ${styles.mb24} ${styles.align_center_pc}`}>
              <a href="https://propo.fm/" className={styles.topChannel__btn__link}>
                <span>スキ！</span>
              </a>
              <input className={styles.c_submit_btn_hidden} type="submit" value="" />
            </div>

          </div>
        </div>


      </section>

      <CommonBox4 />
    </Layout>
  )
}