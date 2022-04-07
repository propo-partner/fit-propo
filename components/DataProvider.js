import React, { createContext, useState, useRef } from "react";

export const DataContext = createContext({});

export const DataProvider = (props) => {
  const { children } = props;

  const intervalRef = useRef(null);
  const [track, setTrack] = useState([]);
  const [isPlay, setIsPlay] = useState(false); // playing state
  const test = 'abc';
  const [episode, setEpisode] = useState([])

  return (
    <DataContext.Provider
      value={{ 
        intervalRef,
        track,
        setTrack,
        isPlay,
        setIsPlay,
        episode,
        setEpisode,
        test
      }}>
      {children}
    </DataContext.Provider>
  );
};
