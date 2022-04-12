import React, { createContext, useState, useRef } from "react";

export const DataContext = createContext({});

export const DataProvider = (props) => {
  const { children } = props;

  const intervalRef = useRef(null);
  const [track, setTrack] = useState([]);
  const [isPlay, setIsPlay] = useState(false); // playing state
  const [musicCurrentTime, setMusicCurrentTime] = useState(0);
  // const [episode, setEpisode] = useState([])

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
        // episode,
        // setEpisode,
      }}>
      {children}
    </DataContext.Provider>
  );
};
