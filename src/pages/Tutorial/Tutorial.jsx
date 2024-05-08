import React, { useState, useEffect } from 'react';
import styles from './Tutorial.module.css';
import AudioPlayer from '../../utils/AudioPlayer/AudioPlayer';
import crowd from '../../assets/audio/extraCrowd.mp3';
import Comms from '../../components/Comms/Comms';
import { useIndexContext } from '../../utils/DataContext/DataContext';
import { fourth } from '../../scripts/Fourth';
import { fifth } from '../../scripts/Fifth';

const Tutorial = () => {
  const [tutorialIndex, setTutorialIndex] = useState(0);
  const [btnVal, setBtnVal] = useState('Next');
  const [prevDisplay, setPrevDisplay] = useState(false);
  const [cur, setCur] = useState(fourth);
  const [raviEntry, setRaviEntry] = useState(false);
  const { index, setIndex } = useIndexContext();

  useEffect(() => {
    if (index === fourth.length) {
      setCur(null);
      setTutorialIndex(1);
    }
  }, [index]);

  const TutorialScript = {
    title: ['Tutorial Time!', 'Before the Match Begins . . .', 'The Gameplay'],
    content: [
      [' . . . ', ' . . . ', ' . . . '],
      [
        'Game Scenario: India v/s Australia in the 2023 ICC Cricket World Cup Final. There is No Need to Explain it further as our Geezer already did it.',
        'Hand Cricket Simulation: When the Play is Active, the Batter and the Bowler will Choose a Number, if their Input Runs are Same, then the Batter will be Given OUT, otherwise the Batter gains his Total Runs from his own Inputs.',
        'It will be a 50-Over Game Each Side (Obv). You will have to Bat First and Put a Good Score and successfully Defend the Runs to claim the Ultimate Title in our Own World :)',
      ],
      [
        'Trivially, you can Select 0, 1, 2, 3, 4 or 6 on a Ball. The Runs will be Visible on the Gameplay Screen. You have to Select one of them and then Click on Batting/Bowling Icon or Press SPACE Key.',
        'Hand Cricket Simulation Mechanices will be Followed. While Batting, the Batter cannot get OUT on Playing the 0 Runs Shot. Similarly, the Probability that the Batter will get OUT while Playing the 6 Runs Shot is very High.',
        "Previous Input Runs of Australia (The Computer) will be Visible after each Ball. Try to Understand the Algorithm for Better Results. Anyways, it is a Luck Based Game, so if this Algorithm Reading doesn't Work, then Kindly Blame Your Own Luck.",
      ],
    ],
  };
  const timer = setTimeout(() => {
    setRaviEntry(true);
  }, 500);
  const handlePrev = () => {
    if (tutorialIndex === 2) {
      setTutorialIndex(tutorialIndex - 1);
      setPrevDisplay(false);
    } else if (tutorialIndex > 0) {
      setTutorialIndex(tutorialIndex - 1);
      setPrevDisplay(true);
    }
    if (tutorialIndex < TutorialScript.title.length) {
      setBtnVal('Next');
    }
  };
  const handleNext = () => {
    if (tutorialIndex < TutorialScript.title.length) {
      if (tutorialIndex === 1) {
        setPrevDisplay(true);
        setCur(fifth);
        setBtnVal('Okay');
        setTutorialIndex(tutorialIndex + 1);
      } else if (tutorialIndex === 2) {
        setIndex(0);
      } else {
        setTutorialIndex(tutorialIndex + 1);
      }
    } else if (tutorialIndex === TutorialScript.title.length - 2) {
    }
  };
  return (
    <div className={styles.main}>
      <AudioPlayer src={crowd} hasInteracted={true} reduceVal={0.5} />
      {raviEntry && index < fourth.length && cur === fourth ? (
        <Comms scene={cur} limit={cur.length} />
      ) : (
        ''
      )}
      {raviEntry && index < fifth.length && cur === fifth ? (
        <Comms scene={cur} limit={cur.length} destination="/game" />
      ) : (
        ''
      )}
      <div className={styles.tutCont}>
        <div className={styles.tutTitle}>
          <h1 className={styles.title}>
            {TutorialScript.title[tutorialIndex]}
          </h1>
        </div>
        <div className={styles.tutContent}>
          <ul>
            <h2>
              <li>{TutorialScript.content[tutorialIndex][0]}</li>
              <li>{TutorialScript.content[tutorialIndex][1]}</li>
              <li>{TutorialScript.content[tutorialIndex][2]}</li>
            </h2>
          </ul>
        </div>
        <div className={styles.btnCont}>
          <div className={styles.tutBackBtn}>
            {prevDisplay ? (
              <button className={styles.back} onClick={handlePrev}>
                Back
              </button>
            ) : (
              ''
            )}
          </div>
          <div className={styles.tutNextBtn}>
            {tutorialIndex > 0 ? (
              <button className={styles.next} onClick={handleNext}>
                {btnVal}
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
