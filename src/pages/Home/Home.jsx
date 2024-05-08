import React, { useState } from 'react';
import styles from './Home.module.css';
import AudioPlayer from '../../utils/AudioPlayer/AudioPlayer';
import Comms from '../../components/Comms/Comms';
import music from '../../assets/audio/Dil-Jashan-Jashan-Bole.mp3';
import src from '../../assets/img/main.png';
import { first } from '../../scripts/First';
import { useIndexContext } from '../../utils/DataContext/DataContext';

const Home = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [raviEntry, setRaviEntry] = useState(false);
  
  const { index, setIndex } = useIndexContext();
  const preGamePagePath = '/pre';
  const n = first.length;

  const handleInteract = () => {
    setHasInteracted(true);
    const timer = setTimeout(() => {
      setRaviEntry(true);
    }, 10);
    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <div className={styles.main} onClick={handleInteract}>
      <AudioPlayer src={music} hasInteracted={hasInteracted} reduceVal={0.1} />
      <img className={styles.mainImg} src={src} alt="" />
      {raviEntry && (index < n) ? <Comms scene={first} limit={n} destination={preGamePagePath} /> : ''}
    </div>
  );
};

export default Home;
