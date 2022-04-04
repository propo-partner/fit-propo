import Layout from '../../components/Layout'
import styles from '../../styles/common.module.css'
import CommonBox4 from "../../components/commonBox4";

export default function EpisodePlay () {


  return (
    <Layout>
      <section>
        <div className={styles.episode_play_sec}>
          <div className={styles.episode_thumbnail}>
            <img src="/images/thumbnail_rect01.png" alt="" />
          </div>
          <div className={`${styles.c_roundBtn} ${styles.mb24} ${styles.align_center_pc}`}>
            <a href="https://propo.fm/" className={styles.topChannel__btn__link}>
              <span>エピソードを聴く</span>
              <img className={styles.ico_right} src="/images/ico_play.svg" />
            </a>
            <input className={styles.c_submit_btn_hidden} type="submit" value="" />
          </div>
          <div className={styles.audio_player_wrap}>
            <div className={`${styles.timeber} ${styles.mb16}`}>
            エピソードプレイバーが入ります
            </div>
            <h2 className={`${styles.c_title} ${styles.mb12} ${styles.episode_title}`}>0547_史記の物語。韓信は位人臣を極め、故郷に錦も飾ったけど非業の最期を遂げたのだ！（涙）</h2>
            <p className={`${styles.c_text_grey} ${styles.mb8} ${styles.program_title}`}>ラジレキ - ラジオ歴史小話</p>
            <p className={styles.c_text_grey12}>2021.08.20</p>
          </div>
        </div>
        <div className={`${styles.c_greybox} ${styles.c_question_box} ${styles.mb40}`}>
          <p className={`${styles.c_title} ${styles.mb12}`}>このエピソードは<br />あなたの興味に合いましたか？</p>
          <p className={`${styles.c_text} ${styles.mb16}`}>
          フィードバックいただけると、もっと興味のあるエピソードをお届けすることができます。
          </p>
          <div className={styles.c_flex_wrap_center}>
            <div className={`${styles.c_roundBtn_white}`}>
            <a href="https://propo.fm/" className={styles.topChannel__btn__link}>
              <span>イマイチ...</span>
            </a>
          </div>
          <div className={`${styles.c_roundBtn}`}>
              <a href="https://propo.fm/" className={styles.topChannel__btn__link}>
                <span>スキ！</span>
              </a>
              <input className={styles.c_submit_btn_hidden} type="submit" value="" />
            </div>
          </div>
        </div>
        <div className={styles.episode_description}>
          <h3 className={`${styles.c_title_16} ${styles.mb4}`}>エピソード内容</h3>
          <p className={ `${styles.c_text} ${styles.description}`}>人を見た目や一つの出来事だけで判断してはならないと言いますが、なかなか難しいですよね。<br />
          前回紹介した韓信の非業の最期を取り上げます！</p>
        </div>
        <div className={styles.program_info_wrap}>
          <h2 className={`${styles.c_title} ${styles.mb16}`}>番組紹介</h2>
          <div className={`${styles.info_content}`}>
            <div className={styles.program_thumbnail}>
              <img src="/images/thumbnail_rect01.png" alt="" />
            </div>
            <div className={styles.program_info}>
              <h3 className={`${styles.c_title_center} ${styles.mb16}`}>ラジレキ 〜ラジオ歴史小話〜</h3>
              <div className={`${styles.c_appBtn_wrap} ${styles.mb16}`}>
                <a href="" className={styles.mr16}>
                  <img src="/images/ico_apple_podcast.svg" />
                </a>
                <a href="">
                  <img src="/images/ico_spotify_podcast.svg" />
                </a>
              </div>
              <p className={`${styles.detail} ${styles.c_text}`}>
              『ラジレキ 〜りーとん・そっしーのラジオ歴史小話〜』 〜歴史 × ビジネス × 雑談ネタ × ゆるさ〜 意外な組み合わせを、"歴史フリーク" りーとんと、"頑張るマン" そっしーの二人が織りなす、ゆるく聞きやすく、時に痛快に展開するポッドキャスト（Podcast）番組。 難しい！と感じる歴史のハナシも、身近なものと組み合わせてくれると思わず誰かとシェアしたくなるから不思議です。 ゆる～く、かるく、やわらかく、皆さんの耳に♪
              </p>
            </div>
          </div>
        </div>


      </section>

      <CommonBox4 />
    </Layout>
  )
}