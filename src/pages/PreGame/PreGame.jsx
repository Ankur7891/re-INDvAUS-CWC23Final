import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './PreGame.module.css';
import AudioPlayer from '../../utils/AudioPlayer/AudioPlayer';
import Comms from '../../components/Comms/Comms';
import music from '../../assets/audio/2023CWC-ScoreCard.mp3';
import src0 from '../../assets/img/RoadtoFinale.jpg';
import src1 from '../../assets/img/finalRSvPC.jpg';
import src2 from '../../assets/img/finalToss.png';
import src3 from '../../assets/img/Virat-and-Rohit.jpg';
import src4 from '../../assets/img/INDout.png';
import src5 from '../../assets/img/THead100.png';
import src6 from '../../assets/img/AUS-winners.png';
import src7 from '../../assets/img/SC23Final.png';
import { second } from '../../scripts/Second';
import { third } from '../../scripts/Third';
import { useIndexContext } from '../../utils/DataContext/DataContext';

const PreGame = () => {
  const [src, setSrc] = useState(src0);
  const [showAnimation, setShowAnimation] = useState(true);
  const [active, setActive] = useState(false);
  const [raviEntry, setRaviEntry] = useState(false); 
  const [cur, setCur] = useState(second);
  const { index, setIndex } = useIndexContext();

  const chngSrc = (temp) => {
    setSrc(temp);
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
  };

  useEffect(() => {
    setIndex(0);
  }, []);

  const timer2 = setTimeout(() => {
    setRaviEntry(true);
  }, 3000);

  const timer3 = setTimeout(() => {
    setActive(true);
  }, 5000);

  return (
    <div className={styles.main}>
      {cur === null ? (
        <Link to="/tutorial">
          <div className={styles.temp}></div>
        </Link>
      ) : (
        <div
          className={styles.temp}
          onClick={() => {
            if (active) {
              if (src === src0) {
                chngSrc(src1);
              } else if (src === src7) {
                setRoute(true);
              } else {
                if (src === src2 && index === third.length) {
                  setTimeout(() => {
                    setIndex(0);
                    chngSrc(src7);
                    setCur(null);
                  }, 250);
                } else {
                  setTimeout(() => {
                    setIndex(0);
                    chngSrc(src2);
                    setCur(third);
                  }, 250);
                }
              }
            }
          }}
        ></div>
      )}
      <AudioPlayer src={music} hasInteracted={true} reduceVal={0.25} />
      <img
        className={showAnimation ? styles.mainImgAnim : styles.mainImg}
        src={
          cur === second
            ? src
            : cur === third
            ? 2 > index && index > 0 ? src3 :
            3 > index && index > 1
              ? src4
              : 4 > index && index > 2
              ? src5
              : index > 3
              ? src6
              : src
            : src
        }
        alt=""
        onAnimationEnd={() => setShowAnimation(false)}
      />
      {raviEntry && index < second.length && cur === second ? (
        <Comms scene={second} limit={second.length} />
      ) : (
        ''
      )}
      {raviEntry && index < third.length && cur === third ? (
        <Comms scene={third} limit={third.length} />
      ) : (
        ''
      )}
    </div>
  );
};

export default PreGame;
