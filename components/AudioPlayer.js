import Head from 'next/head'
import React, { useEffect, useRef, useState, useContext  } from "react";
import { DataContext } from './DataProvider'
import styles from '../styles/player.module.css'
import episodeImg from "../public/images/thumbnail_rect01.png";


export const AudioPlayer = () => {
  // track
  const { track, intervalRef, isPlay, setIsPlay } = useContext(DataContext);

  const { title, date, duration,  epiNum, src } = track;
  // const thumbnail = episodeImg
  console.log('src', track.src)
  console.log(track)

  const [audio, setAudio] = useState(null);
  
  const musicRef = useRef(
    // useEffect(() => {setAudio(new Audio("https://storage.googleapis.com/propo-apollo-stg.appspot.com/users/Jvmy7pwgJmbUYw0vWjNPklIQwO22/channels/FEPdlmxIDrgN6wYk0EK0/20210402_111648_593_radiohistory_ep0511_%E3%80%8C%E3%83%AB%E3%83%BC%E3%83%AB%E6%95%B4%E5%82%99%E3%81%8B%E3%82%99%E7%99%BA%E5%B1%95%E3%81%AE%E3%82%AB%E3%82%AD%E3%82%99%E3%80%8D%E3%82%AA%E3%82%B9%E3%83%9E%E3%83%B3%E5%B8%9D%E5%9B%BD%E3%82%B9%E3%83%AC%E3%82%A4%E3%83%9E%E3%83%B31%E4%B8%96%E3%81%A8%E3%82%A6%E3%82%A3%E3%83%BC%E3%83%B3%E5%8C%85%E5%9B%B2.mp3"))}, [])
    useEffect(() => {setAudio(new Audio(track.src))}, [track.src])
  );
  console.log(musicRef)

  // const musicCurrentTime = musicRef.current.currentTime;
  // const musicRate = (Math.floor(musicCurrentTime / track.duration * 100));
 
  const [timePosition, setTimePosition] = useState(0); // time position

  const speed = [1.0, 1.3, 1.5, 2.0, 0.5, 0.7];
  const [speedIndex, setSpeedIndex] = useState(0);
  const [speedNextIndex, setSpeedNextIndex] = useState(1);
  
  const musicTime = (time) => {
    let hour = (Math.floor(time / 60 / 60)).toString().padStart( 2, '0');
    let minutes = (Math.floor((time / 60) % 60)).toString().padStart( 2, '0');
    let sec = (Math.floor(time % 60)).toString().padStart( 2, '0');
    let convertTime;
    convertTime = hour + ':' + minutes + ':' + sec;
    return convertTime;
  }

  const start = () => {
    if (intervalRef.current !== null) {
      return;
    }
    
    intervalRef.current = setInterval(() => {
      if (musicRef.current.ended) {
        console.log('nextTrack実行 ');
        nextTrack();
      } else {
      // setTimePosition(musicRef.current.currentTime);
      // console.log(' 再生トラック/経過時間 ');
      // console.log('trackIndex ' + trackIndex + ' / ' + musicRef.current.currentTime);
      }
    }, [1000]);
  };


  useEffect(() => {
    musicRef.current = audio;
  }, [src]);

  useEffect(() => {
    if(isPlay) {
      musicRef.current.play();
      start();
      console.log('track  start ');
    } else {
      // musicRef.current.pause();
      console.log('track  pause ');
      if (intervalRef.current === null) {
        return;
      }
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [isPlay]);

  const timeBar = useRef(null);
  let timeBarWidth;
  let timeBarX;

  // play button
  const onClickTogglePlay = () => {
    if (isPlay) {
      setIsPlay(!isPlay);
      // const playingTrack = track[trackIndex];
      // playingTrack.playing = false;
      // console.log('isPlay change ' + isPlay);
    } else {
      setIsPlay(!isPlay);
      // const playingTrack = track[trackIndex];
      // playingTrack.playing = true;

      // console.log('!isPlay change ' + isPlay);
    }
  }

  // prev 15s
  const onClickBack = () => {
    console.log("15s playback");
    // musicRef.current.currentTime -= 15;
  }
  
  // next 30s
  const onClickSkip = () => {
    console.log("30s playskip");
    // musicRef.current.currentTime += 30;
  }


  // timebar click
  const onClickTime = (e) => {
    timeBarWidth = e.target.getBoundingClientRect().width;
    timeBarX = e.nativeEvent.offsetX;
    // console.log('timeBarクリック: ' + timeBarX / timeBarWidth * track[trackIndex].duration + '');
    // console.log(e.target.getBoundingClientRect().width);
    // console.log(e.nativeEvent.offsetX);
    // musicRef.current.currentTime = (timeBarX / timeBarWidth * track[trackIndex].duration);
  }

  // speed change
  const onClickChangeSpeed = () => {
    if (speedIndex === speed.length - 1) {
      setSpeedIndex(0);
      setSpeedNextIndex(speedNextIndex + 1);
    } else {
      setSpeedIndex(speedIndex + 1);
      if (speedNextIndex === speed.length - 1) {
        setSpeedNextIndex(0);
      } else {
        setSpeedNextIndex(speedNextIndex + 1);
      }
    }
    musicRef.current.playbackRate = speed[speedNextIndex];
    console.log(speedIndex);
    console.log(speedNextIndex + 'next');
  }

  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Head>
    <div id={styles.app} className={styles.app}>
    <div id={styles.audio_thumb}>
      <img className={styles.ep_img} src={episodeImg.src} alt={epiNum} />
      
      <div className={styles.play_btn_wrap} onClick={onClickTogglePlay}>
      {isPlay? 
        (
          <i id={styles.pause_ico} className={`${styles["material-icons"]}`}>pause_circle_outline</i>
        ) : (
          <i id={styles.play_ico} className={`${styles["material-icons"]}`}>play_circle_outline</i>
        )
      }
      </div>
    </div>
    <div id={styles.audio_desc}>
      <div className={styles.audio_desc_upper}>
        <div className={`${styles["ep-programName"]}`}>MOTION GALLERY CROSSING（モーショングギャラリークロッシング）
        </div>
        <div className={`${styles["ep-date"]}`}>{date}</div>
      </div>
      <div className={`${styles["ep-title"]}`}>
        {title}<span className={`${styles["sp-nodisp"]}`}></span>
      </div>
      {/* <div id={styles.timebar}>
        <div id={`${styles["timebar-bg"]}`} onClick={onClickTime} ref={timeBar}>
          <div id={`${styles["timebar-past"]}`} style={{width: musicRate + '%'}}>
            <div id={`${styles["timebar-num"]}`}>{musicRate + '%'}</div>
          </div>
        </div>
      </div> */}
      <div className={styles.time_ctl_wrap}>
        <span id={styles.time_disp}>
        {musicTime(timePosition)}/
        {musicTime(duration)}
        </span>
        <p className={styles.time_control_area}>
          <span>
            <img 
              id={styles.playback} 
              src="https://propo.fm/image/rewind.png" 
              width="23" 
              alt="rewind" 
              onClick={onClickBack}
            />
          </span>
          <span>
            <img 
              id={styles.skip} 
              src="https://propo.fm/image/skip.png" 
              width="23" 
              alt="skip"
              onClick={onClickSkip}
            />
          </span>
          <span id={styles.speed_ctrl} onClick={onClickChangeSpeed}>{speed[speedIndex].toFixed(1)}x</span>
        </p>
      </div>
    </div>
    </div>


  </>

  );
}
