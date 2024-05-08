import React, { useState, useEffect } from 'react';
import styles from './Gameplay.module.css';
import ShotCard from '../../components/ShotCard/ShotCard';
import ScoreCard from '../../components/ScoreCard/ScoreCard';
import Comms from '../../components/Comms/Comms';
import AudioPlayer from '../../utils/AudioPlayer/AudioPlayer';
import crowdMusic from '../../assets/audio/crowd.mp3';
import DJJ from '../../assets/audio/Dil-Jashan-Jashan-Bole.mp3';
import SCM from '../../assets/audio/2023CWC-ScoreCard.mp3';
import { useIndexContext } from '../../utils/DataContext/DataContext';
import { sixth } from '../../scripts/Sixth';
import { seventh } from '../../scripts/Seventh';
import { eighth } from '../../scripts/Eighth';
import { nineth } from '../../scripts/Nineth';
import { tenth } from '../../scripts/Tenth';
import Run0 from '../../assets/img/Run0.png';
import Run1 from '../../assets/img/Run1.png';
import Run2 from '../../assets/img/Run2.png';
import Run3 from '../../assets/img/Run3.png';
import Run4 from '../../assets/img/Run4.png';
import Run6 from '../../assets/img/Run6.png';
import Bowl from '../../assets/img/BowlBtn.png';
import Bat from '../../assets/img/BatBtn.png';
import Wicket from '../../assets/img/out.png';

const Playing11s = [
  [
    'Rohit',
    'Gill',
    'Kohli',
    'Shreyas',
    'KL Rahul',
    'Jadeja',
    'Suryakumar',
    'Shami',
    'Bumrah',
    'Kuldeep',
    'Siraj',
  ],
  [
    'Warner',
    'Head',
    'Marsh',
    'Smith',
    'Labuschagne',
    'Maxwell',
    'Inglis',
    'Starc',
    'Cummins',
    'Zampa',
    'Hazlewood',
  ],
];

const Bowling = [
  [
    7, 10, 7, 10, 7, 10, 7, 5, 8, 5, 8, 9, 8, 9, 8, 9, 8, 5, 10, 2, 10, 1, 7, 2,
    5, 9, 5, 9, 8, 9, 8, 9, 7, 1, 7, 10, 5, 10, 9, 10, 9, 7, 8, 7, 9, 7, 8, 10,
    8, 10,
  ],
  [
    8, 7, 8, 7, 8, 7, 8, 7, 8, 7, 5, 9, 5, 9, 5, 9, 10, 9, 10, 9, 10, 9, 5, 7,
    5, 7, 5, 8, 5, 8, 5, 9, 5, 9, 5, 9, 10, 9, 10, 8, 10, 8, 10, 7, 10, 7, 10,
    7, 10, 8,
  ],
];

const Gameplay = () => {
  const [activeR0, setActiveR0] = useState(true);
  const [activeR1, setActiveR1] = useState(false);
  const [activeR2, setActiveR2] = useState(false);
  const [activeR3, setActiveR3] = useState(false);
  const [activeR4, setActiveR4] = useState(false);
  const [activeR6, setActiveR6] = useState(false);
  const [run, setRun] = useState(0);
  const [compRun, setCompRun] = useState(6);
  const [inning, setInning] = useState(0);
  const [total, setTotal] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [wanim, setWAnim] = useState(false);
  const [balls, setBalls] = useState(0);
  const [batRun, setBatRun] = useState(0);
  const [batBall, setBatBall] = useState(0);
  const [timeline, setTimeline] = useState([
    '-1',
    '-1',
    '-1',
    '-1',
    '-1',
    '-1',
  ]);
  const [target, setTarget] = useState(-1);
  const [raviEntry, setRaviEntry] = useState(false);
  const [cur, setCur] = useState(null);
  const { index, setIndex } = useIndexContext();
  useEffect(()=> {
    setIndex(0);
  }, []);

  const [outcome, setOutcome] = useState(0);

  const handleR0 = () => {
    setActiveR0(true);
    setActiveR1(false);
    setActiveR2(false);
    setActiveR3(false);
    setActiveR4(false);
    setActiveR6(false);
    setRun(0);
  };

  const handleR1 = () => {
    setActiveR0(false);
    setActiveR1(true);
    setActiveR2(false);
    setActiveR3(false);
    setActiveR4(false);
    setActiveR6(false);
    setRun(1);
  };

  const handleR2 = () => {
    setActiveR0(false);
    setActiveR1(false);
    setActiveR2(true);
    setActiveR3(false);
    setActiveR4(false);
    setActiveR6(false);
    setRun(2);
  };

  const handleR3 = () => {
    setActiveR0(false);
    setActiveR1(false);
    setActiveR2(false);
    setActiveR3(true);
    setActiveR4(false);
    setActiveR6(false);
    setRun(3);
  };

  const handleR4 = () => {
    setActiveR0(false);
    setActiveR1(false);
    setActiveR2(false);
    setActiveR3(false);
    setActiveR4(true);
    setActiveR6(false);
    setRun(4);
  };

  const handleR6 = () => {
    setActiveR0(false);
    setActiveR1(false);
    setActiveR2(false);
    setActiveR3(false);
    setActiveR4(false);
    setActiveR6(true);
    setRun(6);
  };

  const currentPlay = () => {
    setBalls(balls + 1);
    setBatBall(batBall + 1);
    const rand = Math.random();
    let c = 6;
    let overBall = balls % 6;
    const tempTimeline = [...timeline];
    if (inning === 0) {
      if (rand > 0.7) {
        c = 6;
        setCompRun(6);
      } else if (rand > 0.4) {
        c = 4;
        setCompRun(4);
      } else if (rand > 0.2) {
        c = 3;
        setCompRun(3);
      } else if (rand > 0.1) {
        c = 2;
        setCompRun(2);
      } else {
        c = 1;
        setCompRun(1);
      }
    } else {
      if (rand > 0.8) {
        c = 6;
        setCompRun(6);
      } else if (rand > 0.6) {
        c = 4;
        setCompRun(4);
      } else if (rand > 0.5) {
        c = 3;
        setCompRun(3);
      } else if (rand > 0.3) {
        c = 2;
        setCompRun(2);
      } else if (rand > 0.15) {
        c = 1;
        setCompRun(1);
      } else {
        c = 0;
        setCompRun(0);
      }
    }
    if (c === run && c !== 0) {
      setWicket(wicket + 1);
      setBatRun(0);
      setBatBall(0);
      handleR0();
      setRun(0);
      tempTimeline[overBall] = 'W';
      setTimeline(tempTimeline);
    } else {
      if (inning === 0) {
        tempTimeline[overBall] = run.toString();
        setTotal(total + run);
        setBatRun(batRun + run);
      } else {
        tempTimeline[overBall] = c.toString();
        setTotal(total + c);
        setBatRun(batRun + c);
      }
      setTimeline(tempTimeline);
    }
    if (balls === 299) {
      if (inning === 0) {
        setInning(1);
        setTarget(total + 1);
        setWicket(0);
        setTotal(0);
        setBalls(0);
        setTimeline(['-1', '-1', '-1', '-1', '-1', '-1']);
        setCur(seventh);
        setRaviEntry(true);
      } else {
        if (total + c >= target && tempTimeline[overBall] !== 'W') {
          setOutcome(1);
          setCur(eighth);
        } else if (target - total === 1) {
          setOutcome(2);
          setCur(tenth);
        } else {
          setOutcome(3);
          setCur(nineth);
        }
      }
    }
    if (balls % 6 === 5) {
      setTimeline(['-1', '-1', '-1', '-1', '-1', '-1']);
    }
  };

  useEffect(() => {
    if (outcome > 0) {
      setRaviEntry(true);
      if (outcome === 1) {
        alert('-> AUS Won By ' + (10 - wicket) + ' Wickets!');
        setCur(eighth);
      } else if (outcome === 2) {
        alert(' - MATCH TIED - ');
        setCur(tenth);
      } else if (outcome === 3) {
        alert('-> IND Won By ' + (target - total - 1) + ' Runs!');
        setCur(nineth);
      }
    }
  }, [outcome]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 32) {
        event.preventDefault();
        document.getElementById('PLAY').click();
      }
    };

    document.addEventListener('keyup', handleKeyPress);
    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (cur !== null && index === cur.length) {
      setCur(null);
      setIndex(0);
      setRaviEntry(false);
    }
  }, [index]);

  useEffect(() => {
    if (wicket > 0) {
      setWAnim(true);
    }
    if (wicket === 10) {
        setRaviEntry(true);
      if (inning === 0) {
        setInning(1);
        setTarget(total + 1);
        setWicket(0);
        setTotal(0);
        setBalls(0);
        setTimeline(['-1', '-1', '-1', '-1', '-1', '-1']);
        setCur(sixth);
      } else {
        if (target - total === 1) {
          setOutcome(2);
          setCur(tenth);
        } else {
          setOutcome(3);
          setCur(nineth);
        }
      }
    }
  }, [wicket]);

  useEffect(() => {
    if (wanim) {
      const timer = setTimeout(() => {
        setWAnim(false);
      }, 1750);
    }
  }, [wanim]);

  useEffect(() => {
    if (inning === 1) {
      if (total >= target) {
        setOutcome(1);
        setCur(eighth);setRaviEntry(true);
      }
    }
  }, [total]);

  return (
    <>
      {cur !== null && raviEntry && index < cur.length && outcome > 0 ? (
        <Comms
          scene={cur}
          limit={cur.length}
        ></Comms>
      ) : (
        ''
      )}
      {outcome === 0 ? (
        <div className={styles.main}>
          <AudioPlayer src={crowdMusic} hasInteracted={true} reduceVal={0.5} />
          {cur !== null && raviEntry && index < cur.length && outcome === 0 ? (
            <Comms scene={cur} limit={cur.length}></Comms>
          ) : (
            ''
          )}
          {wanim ? (
            <div className={styles.temp}>
              <img src={Wicket} alt="" className={styles.out} />
            </div>
          ) : (
            ''
          )}
          <div className={styles.shotsCont}>
            <div className={styles.shots}>
              <div
                className={activeR0 ? styles.aRun0 : styles.run0}
                onClick={handleR0}
              >
                <ShotCard source={Run0} info="Defend the Ball!" />
              </div>
              <div
                className={activeR1 ? styles.aRun1 : styles.run1}
                onClick={handleR1}
              >
                <ShotCard source={Run1} info="Take a Quick Single." />
              </div>
              <div
                className={activeR2 ? styles.aRun2 : styles.run2}
                onClick={handleR2}
              >
                <ShotCard source={Run2} info="In a Small Gap for 2 Runs..." />
              </div>
              <div
                className={activeR3 ? styles.aRun3 : styles.run3}
                onClick={handleR3}
              >
                <ShotCard source={Run3} info="In a Big Gap for 3 Runs..." />
              </div>
              <div
                className={activeR4 ? styles.aRun4 : styles.run4}
                onClick={handleR4}
              >
                <ShotCard source={Run4} info="Smash to the Boundary, FOUR!" />
              </div>
              <div
                className={activeR6 ? styles.aRun6 : styles.run6}
                onClick={handleR6}
              >
                <ShotCard source={Run6} info="Over the Top for a SIX!" />
              </div>
              <div className={styles.playBtn}>
                <img
                  id="PLAY"
                  src={inning === 0 ? Bat : Bowl}
                  alt=""
                  className={styles.play}
                  onClick={currentPlay}
                />
              </div>
              <div className={styles.compInput}>
                <h1>{compRun}</h1>
              </div>
            </div>
          </div>
          <ScoreCard
            score={`${total}-${wicket}`}
            overs={`${Math.floor(balls / 6)}.${balls % 6}`}
            rr={balls === 0 ? '0.00' : `${((6 * total) / balls).toFixed(2)}`}
            op={inning === 0 ? 'AUS' : 'IND'}
            team={inning === 1 ? 'AUS' : 'IND'}
            batName={Playing11s[inning][wicket]}
            batRun={batRun}
            batBall={batBall}
            timeline={timeline}
            bowler={
              Playing11s[inning === 0 ? 1 : 0][
                Bowling[inning][`${Math.floor(balls / 6)}`]
              ]
            }
            target={[target - total, 300 - balls]}
          />
        </div>
      ) : outcome === 1 ? (
        <div className={styles.main1}>
          <AudioPlayer src={SCM} hasInteracted={true} reduceVal={0.25} />
        </div>
      ) : outcome === 2 ? (
        <div className={styles.main2}>
          <AudioPlayer src={SCM} hasInteracted={true} reduceVal={0.15} />
        </div>
      ) : outcome === 3 ? (
        <div className={styles.main3}>
          <AudioPlayer src={DJJ} hasInteracted={true} reduceVal={0.15} />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Gameplay;
