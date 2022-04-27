import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '../../styles/common.module.css'
import CommonBox4 from "../../components/commonBox4";
import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../../components/DataProvider';


export const getStaticProps = async () => {
  return {
    props: {
      layout: 'withPlayer'
    },
  }
}


export default function EpisodePlay () {
  const router = useRouter();


  // episode info only
  // const url = 'https://api.json-generator.com/templates/5g-ILyuHM4AL/data?access_token=6a76lvuqp3cwnx944w7p5w2e1mv7v7puos3rn15p'

  // program + episode info
  const url = 'https://api.json-generator.com/templates/QgSAkpfZNNRi/data?access_token=6a76lvuqp3cwnx944w7p5w2e1mv7v7puos3rn15p'
  
  const { track, setTrack, isPlay, setIsPlay, musicRate, musicTime, timePosition, musicCurrentTime } = useContext(DataContext)

  const { duration } = track;


  useEffect(() => {
    (async() => {
      const respons = await fetch(url)
      const data = await respons.json()
      setTrack(data)
    })()
  }, [])

  // console.log('title', track.title);
  // console.log('track', track);

  const onClickPlay = () => {
    if(isPlay) {
      setIsPlay(false)
    } else {
      setIsPlay(true)
    }
  }

  // timebar click
  const timeBar = useRef(null);
  let timeBarWidth;
  let timeBarX;

  const onClickTime = (e) => {
    timeBarWidth = e.target.getBoundingClientRect().width;
    timeBarX = e.nativeEvent.offsetX;
    musicCurrentTime = (timeBarX / timeBarWidth * track.duration);
  }

  const [btnSubmitFlg, setBtnSubmitFlg] = useState(false)

  // like btn
  const onClickLikeBtn = async () => {
    setBtnSubmitFlg(true)
    const putDataIntentLike = 
      {
        uid: "305",
        intent: "like",
        context: "episode_page",
        episode_id: "episode1",
      }

    // post data
    const postUrl = "https://v1.nocodeapi.com/propofm/airtable/vWKvQMugEcliaMcn?tableName=user_intent_logs&typecast=post"

    const intentHeaders = new Headers();
    intentHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "post",
      headers: intentHeaders,
      redirect: "follow",
      body: JSON.stringify([
        putDataIntentLike
      ])
    }

    const res = await fetch(postUrl, requestOptions)
    const result = await res.json()

    if (res.ok) {
      router.push("/episode/radiohistory/like")
    } else {
      alert('通信エラーが発生しました。しばらく経ってから、再度送信してください。')
    }
  }
  
  // unlike btn
  const onClickUnlikeBtn = async () => {
    setBtnSubmitFlg(true)
    // if(!btnSubmitFlg) {
    //   return
    // }
    
    const putDataIntentUnlike = 
      {
        uid: "301",
        intent: "unlike",
        context: "episode_page",
        episode_id: "episode2",
      }

    // post data
    const postUrl = "https://v1.nocodeapi.com/propofm/airtable/vWKvQMugEcliaMcn?tableName=user_intent_logs&typecast=post"

    const intentHeaders = new Headers();
    intentHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "post",
      headers: intentHeaders,
      redirect: "follow",
      body: JSON.stringify([
        putDataIntentUnlike
      ])
    }

    const res = await fetch(postUrl, requestOptions)
    const result = await res.json()

    if (res.ok) {
      router.push("/episode/radiohistory/unlike")
    } else {
      alert('通信エラーが発生しました。しばらく経ってから、再度送信してください。')
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

            </div>
            ) : (
              <div className={styles.c_roundBtn_inner}>
              <span>エピソードを聴く</span>
              <span className={` ${["material-icons-outlined"]} ${styles.ico_right}`}>play_circle_outline</span>
            </div>
            )
          }
          </div>
          <div className={styles.audio_player_wrap}>
            <div className={`${styles.timeber} ${styles.mb16}`}>
              <div className={styles.timebar}>
                <div onClick={onClickTime} ref={timeBar}>
                  <div>
                    <div id={`${styles["timebar-past"]}`} style={{width: musicRate + '%'}}>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.time_ctl_wrap}>
                <span id={styles.time_disp}>
                  {musicTime(timePosition)} | {musicTime(duration)}
                </span>
                <span id={`${styles["timebar-num"]}`}>{musicRate + '%'}</span>
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
            <button className={`${styles.c_roundBtn_white}`} onClick={onClickUnlikeBtn} disabled={btnSubmitFlg}>
              <div className={styles.c_roundBtn_inner}>
                <span>イマイチ...</span>
              </div>
            </button>
            <button className={`${styles.c_roundBtn}`} onClick={onClickLikeBtn} disabled={btnSubmitFlg}>
              <div className={styles.c_roundBtn_inner}>
                <span>スキ！</span>
              </div>
            </button>
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
              </p>
            </div>
          </div>
        </div>


      </section>

      <CommonBox4 />
    </>

  )
}