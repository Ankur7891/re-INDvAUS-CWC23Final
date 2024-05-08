import React, { useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.css';

const AudioPlayer = ({ src, hasInteracted, reduceVal }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = reduceVal;
    if (hasInteracted) {
      audio.loop = true;
      audio.play(); 
    }
    return () => {
      audio.pause(); 
    };
  }, [hasInteracted, src]);

  return (
    <div className={styles.audioInterface} >
      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default AudioPlayer;
