import Head from 'next/head'
import React, { useEffect, useRef, useState, useContext  } from "react";
import { DataContext } from './DataProvider'
import styles from '../styles/player.module.css'
import episodeImg from "../public/images/thumbnail_rect01.png";


export const AudioPlayer = () => {
  // track
  const { track, intervalRef, isPlay, setIsPlay, musicCurrentTime, setMusicCurrentTime, musicRate, setMusicRate, musicTime, timePosition, setTimePosition } = useContext(DataContext);

  const { title, date, duration,  epiNum, src, program } = track;

  const musicRef = useRef(null)
  useEffect(() => {
    musicRef.current = new Audio(track.src);
    console.log('ここ通ったよ')
  }, [src]);
  // console.log(musicRef)

  setMusicRate(Math.floor(musicCurrentTime / track.duration * 100));
  // const musicRate = (Math.floor(musicRef.current.currentTime / track.duration * 100));
  // const musicRate = 0
  // console.log(musicRate)

  // const [timePosition, setTimePosition] = useState(0); // time position

  const speed = [1.0, 1.3, 1.5, 2.0, 0.5, 0.7];
  const [speedIndex, setSpeedIndex] = useState(0);
  const [speedNextIndex, setSpeedNextIndex] = useState(1);
  
  // const musicTime = (time) => {
  //   let hour = (Math.floor(time / 60 / 60)).toString().padStart( 2, '0');
  //   let minutes = (Math.floor((time / 60) % 60)).toString().padStart( 2, '0');
  //   let sec = (Math.floor(time % 60)).toString().padStart( 2, '0');
  //   let convertTime;
  //   convertTime = hour + ':' + minutes + ':' + sec;
  //   return convertTime;
  // }

  const start = () => {
    setMusicCurrentTime(musicRef.current.currentTime)
    // console.log('ここ通ったよ')
    if (intervalRef.current !== null) {
      return;
    }
    
    intervalRef.current = setInterval(() => {
      if (musicRef.current.ended) {
        console.log('audio ended ');
        setIsPlay(false)
        // nextTrack();
      } else {
      setTimePosition(musicRef.current.currentTime);
      // console.log(' 再生トラック/経過時間 ');
      // console.log('track ' + musicCurrentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if(isPlay) {
      musicRef.current.play();
      start();
      console.log('track  start ');

    } else {
      musicRef.current.pause();
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
    } else {
      setIsPlay(!isPlay);
      setMusicCurrentTime(musicRef.current.currentTime)
    }
  }

  // prev 15s
  const onClickBack = () => {
    console.log("15s playback");
    musicRef.current.currentTime -= 15;
  }
  
  // next 30s
  const onClickSkip = () => {
    console.log("30s playskip");
    musicRef.current.currentTime += 30;
  }


  // timebar click
  const onClickTime = (e) => {
    timeBarWidth = e.target.getBoundingClientRect().width;
    timeBarX = e.nativeEvent.offsetX;
    musicRef.current.currentTime = (timeBarX / timeBarWidth * track.duration);
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
    // console.log(speedIndex);
    // console.log(speedNextIndex + 'next');
  }

  return (
    <>
    <div id={styles.app} className={styles.app}>
    <div id={styles.audio_thumb}>
      <img className={styles.ep_img} src={episodeImg.src} alt={epiNum} />
      
      <div className={styles.play_btn_wrap} onClick={onClickTogglePlay}>
      {isPlay? 
        (
          <span className={["material-icons-outlined"]}>pause_circle_outline</span>
        ) : (
          <span className={["material-icons-outlined"]}>play_circle_outline</span>
        )
      }
      </div>
    </div>
    <div id={styles.audio_desc}>
      <div className={styles.audio_desc_upper}>
        <div className={`${styles["ep-programName"]}`}>
          {program}
        </div>
        <div className={`${styles["ep-date"]}`}>{date}</div>
      </div>
      <div className={`${styles["ep-title"]}`}>
        {title}<span className={`${styles["sp-nodisp"]}`}></span>
      </div>
      <div className={styles.timebar}>
        <div onClick={onClickTime} ref={timeBar}>
          <div id={`${styles["timebar-past"]}`} style={{width: musicRate + '%'}}>
            <div id={`${styles["timebar-num"]}`}>{musicRate + '%'}</div>
          </div>
        </div>
      </div>
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
