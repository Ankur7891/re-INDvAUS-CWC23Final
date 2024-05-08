import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShotCard.module.css';

const ShotCard = ({source, info}) => {
  return (
    <div className={styles.imgCont}>
      <img src={source} alt={info} className={styles.shot} />
    </div>
  )
}

ShotCard.propTypes = {
  source: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
}

export default ShotCard;
