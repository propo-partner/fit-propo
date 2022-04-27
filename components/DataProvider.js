import React, { createContext, useState, useRef } from "react";

export const DataContext = createContext({});

export const DataProvider = (props) => {
  const { children } = props;

  const intervalRef = useRef(null);
  const [track, setTrack] = useState([]);
  const [isPlay, setIsPlay] = useState(false); // playing state
  const [musicCurrentTime, setMusicCurrentTime] = useState(0);
  const [musicRate, setMusicRate] = useState(0)
  // const [episode, setEpisode] = useState([])
  const musicTime = (time) => {
    let hour = (Math.floor(time / 60 / 60)).toString().padStart( 2, '0');
    let minutes = (Math.floor((time / 60) % 60)).toString().padStart( 2, '0');
    let sec = (Math.floor(time % 60)).toString().padStart( 2, '0');
    let convertTime;
    convertTime = hour + ':' + minutes + ':' + sec;
    return convertTime;
  }
  const [timePosition, setTimePosition] = useState(0); // time position

  return (
    <DataContext.Provider
      value={{ 
        intervalRef,
        track,
        setTrack,
        isPlay,
        setIsPlay,
        musicCurrentTime,
        setMusicCurrentTime,
        musicRate,
        setMusicRate,
        musicTime,
        timePosition,
        setTimePosition,
        // episode,
        // setEpisode,
      }}>
      {children}
    </DataContext.Provider>
  );
};
