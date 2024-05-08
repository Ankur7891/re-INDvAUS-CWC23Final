import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Comms.module.css';
import RSrc from '../../assets/img/ravi-shastri.png';
import { useIndexContext } from '../../utils/DataContext/DataContext';

const Comms = ({ scene, limit, destination, data }) => {
  const { index, setIndex } = useIndexContext();
  const [btntxt, setBtnTxt] = useState('Next');

  const handleNext = () => {
    if (index < limit) {
      setIndex(index + 1);
    }
    if (index === limit - 2) {
      setBtnTxt('Proceed');
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <img src={RSrc} alt="" className={styles.raviShastri} />
        <div className={styles.temp}>
          <div className={styles.container}>
            <p className={styles.msg}>{scene[index]}</p>
            <div className={styles.btnTemp}>
              {destination === '-1' || index !== limit - 1 ? (
                <button className={styles.nxt} onClick={handleNext}>
                  {btntxt}
                </button>
              ) : (
                <Link to={{pathname: destination, state: {info: data}}}>
                  <button className={styles.nxt} onClick={handleNext}>
                    {btntxt}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blkBG}></div>
    </>
  );
};

Comms.propTypes = {
  scene: PropTypes.arrayOf(PropTypes.string).isRequired,
  limit: PropTypes.number.isRequired,
  destination: PropTypes.string,
  info: PropTypes.number,
};

Comms.defaultProps = {
  destination: '-1',
  info: 0,
};

export default Comms;
