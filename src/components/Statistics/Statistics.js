import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ options, onTotal, onPositivePercentage }) {
  return (
    <ul className={s.statisticsList}>
      <li className={s.statisticsListItem}>Good: {options[0]} </li>
      <li className={s.statisticsListItem}>Neutral: {options[1]} </li>
      <li className={s.statisticsListItem}>Bad: {options[2]}</li>
      <li className={s.statisticsListItemTotal}>Total: {onTotal}</li>
      <li className={s.statisticsListItemPositive}>
        Positiv feedback: {onPositivePercentage}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  onTotal: PropTypes.number.isRequired,
  onPositivePercentage: PropTypes.number.isRequired,
};
