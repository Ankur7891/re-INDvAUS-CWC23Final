import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScoreCard.module.css';
import batBullet from '../../assets/img/batterBullet.png';

function ScoreCard({
  score,
  overs,
  rr,
  team,
  op,
  batName,
  batRun,
  batBall,
  bowler,
  timeline,
  target,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.curBatter}>
          <img src={batBullet} alt="" />
          &nbsp;Current Batter
        </div>
        <div className={styles.batterStat}>
          <div>{batName} </div>
          <div>
            {batRun}
            &nbsp;<text>{batBall}</text>
          </div>
        </div>
        <div className={styles.match}>
          {op} v <b style={{ fontSize: '3.5vh' }}>{team}</b>
        </div>
        <div className={styles.score}>{score}</div>
        <div className={styles.pp}>P</div>
        <div className={styles.overs}>
          <text>{overs}</text> Ovr.
        </div>
        {team === 'IND' ? (
          <div className={styles.rr}>
            Run Rate <b>{rr}</b>
          </div>
        ) : target[0] > 0 ? (
          <div className={styles.chase}>
            Need <b>{target[0]}</b> Runs from <b>{target[1]}</b> Balls
          </div>
        ) : (
          <div className={styles.chase}>Australia Won</div>
        )}
        <div className={styles.bowler}>
          <b>{bowler}</b>
        </div>
        <div className={styles.timeline}>
          <div className={timeline[0] === '-1' ? styles.nil : styles.circle}>
            {timeline[0] === '-1' ? '' : timeline[0]}
          </div>
          <div className={timeline[1] === '-1' ? styles.nil : styles.circle}>
            {timeline[1] === '-1' ? '' : timeline[1]}
          </div>
          <div className={timeline[2] === '-1' ? styles.nil : styles.circle}>
            {timeline[2] === '-1' ? '' : timeline[2]}
          </div>
          <div className={timeline[3] === '-1' ? styles.nil : styles.circle}>
            {timeline[3] === '-1' ? '' : timeline[3]}
          </div>
          <div className={timeline[4] === '-1' ? styles.nil : styles.circle}>
            {timeline[4] === '-1' ? '' : timeline[4]}
          </div>
          <div className={timeline[5] === '-1' ? styles.nil : styles.circle}>
            {timeline[5] === '-1' ? '' : timeline[5]}
          </div>
        </div>
      </div>
    </div>
  );
}

ScoreCard.propTypes = {
  score: PropTypes.string,
  overs: PropTypes.string,
  rr: PropTypes.string,
  op: PropTypes.string,
  team: PropTypes.string,
  batName: PropTypes.string,
  batRun: PropTypes.number,
  batBall: PropTypes.number,
  bowler: PropTypes.string,
  timeline: PropTypes.array,
  target: PropTypes.array,
};

ScoreCard.defaultProps = {
  score: '360-8',
  overs: '50.0',
  rr: '6.00',
  op: 'AUS',
  team: 'IND',
  batName: 'Labuschagne',
  batRun: 47,
  batBall: 31,
  bowler: 'Maxwell',
  timeline: ['4', '6', '0', 'W', '-1', '-1'],
  target: [240, 300],
};

export default ScoreCard;
