import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/common.module.css'
import CommonBox4 from "../../components/commonBox4";
import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../components/DataProvider';
import { AudioPlayer } from '../../components/AudioPlayer';

export default function EpisodePlay () {

  // episode info only
  // const url = 'https://api.json-generator.com/templates/5g-ILyuHM4AL/data?access_token=6a76lvuqp3cwnx944w7p5w2e1mv7v7puos3rn15p'

  // program + episode info
  const url = 'https://api.json-generator.com/templates/QgSAkpfZNNRi/data?access_token=6a76lvuqp3cwnx944w7p5w2e1mv7v7puos3rn15p'
  
  const { track, setTrack, isPlay, setIsPlay} = useContext(DataContext)

  useEffect(() => {
    (async() => {
      const respons = await fetch(url)
      const data = await respons.json()
      setTrack(data)
    })()
  }, [])

  console.log('title', track.title);
  console.log('track', track);

  const onClickPlay = () => {
    if(isPlay) {
      setIsPlay(false)
    } else {
      setIsPlay(true)
    }
  }

  return (
    <>
      <section className={styles.episode_wrap}>
        <div className={styles.episode_play_sec}>
          <div className={styles.episode_thumbnail}>
            <img src="/images/thumbnail_rect01.png" alt="" />
          </div>
          <div className={`${styles.c_roundBtn} ${styles.mb30} ${styles.align_center_pc}`} onClick={onClickPlay}>
          {isPlay ? (
            <div className={styles.c_roundBtn_inner}>
              <span>停止する</span>
              <span className={` ${["material-icons-outlined"]} ${styles.ico_right}`}>play_circle_outline</span>

              {/* <img className={styles.ico_right} src="/images/ico_play.svg" /> */}
            </div>
            ) : (
              <div className={styles.c_roundBtn_inner}>
              <span>エピソードを聴く</span>
              <span className={` ${["material-icons-outlined"]} ${styles.ico_right}`}>play_circle_outline</span>

              {/* <img className={styles.ico_right} src="/images/ico_play.svg" /> */}
            </div>
            )
          }
          </div>
          <div className={styles.audio_player_wrap}>
            <div className={`${styles.timeber} ${styles.mb16}`}>
              <div className={styles.timebar}>
                {/* <div onClick={onClickTime} ref={timeBar}> */}
                <div>
                  {/* <div id={`${styles["timebar-past"]}`} style={{width: musicRate + '%'}}> */}
                  <div id={`${styles["timebar-past"]}`} style={{width: '50%'}}>
                  </div>
                </div>
              </div>
              <div className={styles.time_ctl_wrap}>
                <span id={styles.time_disp}>00:00:00 | 13:46:22
                  {/* {musicTime(timePosition)}/
                  {musicTime(duration)} */}
                </span>
                {/* <span id={`${styles["timebar-num"]}`}>{musicRate + '%'}</span> */}
                <span id={`${styles["timebar-num"]}`}>{'50%'}</span>
              </div>
            </div>
            <h2 className={`${styles.c_title} ${styles.mb12} ${styles.episode_title}`}>{track.title}</h2>
            <p className={`${styles.c_text_grey} ${styles.mb8} ${styles.program_title}`}>{track.program}</p>
            <p className={styles.c_text_grey12}>{track.date}</p>
          </div>
        </div>
        <div className={`${styles.c_greybox} ${styles.c_question_box} ${styles.mb40}`}>
          <p className={`${styles.c_title} ${styles.mb8}`}>このエピソードは<br />あなたの興味に合いましたか？</p>
          <p className={`${styles.c_text} ${styles.mb16}`}>
          フィードバックいただけると、もっと興味のあるエピソードをお届けすることができます。
          </p>
          <div className={styles.c_flex_wrap_center}>
            <div className={`${styles.c_roundBtn_white}`}>
              <Link href="/episode/radiohistory/unlike">
                <a className={styles.c_roundBtn_inner}>
                  <span>イマイチ...</span>
                </a>
              </Link>
            </div>
            <div className={`${styles.c_roundBtn}`}>
              <Link href="/episode/radiohistory/like">
                <a className={styles.c_roundBtn_inner}>
                  <span>スキ！</span>
                </a>
              </Link>
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
              {track.description}
              {/* 『ラジレキ 〜りーとん・そっしーのラジオ歴史小話〜』 〜歴史 × ビジネス × 雑談ネタ × ゆるさ〜 意外な組み合わせを、\&quot;歴史フリーク\&quot; りーとんと、\&quot;頑張るマン\&quot; そっしーの二人が織りなす、ゆるく聞きやすく、時に痛快に展開するポッドキャスト（Podcast）番組。 難しい！と感じる歴史のハナシも、身近なものと組み合わせてくれると思わず誰かとシェアしたくなるから不思議です。 ゆる～く、かるく、やわらかく、皆さんの耳に♪ */}
              </p>
            </div>
          </div>
        </div>


      </section>

      <CommonBox4 />
    </>

  )
}