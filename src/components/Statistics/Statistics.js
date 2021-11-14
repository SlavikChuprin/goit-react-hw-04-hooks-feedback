import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ options, onTotal, onPositivePercentage }) {
  const total = onTotal(options);
  const positivePercentage = onPositivePercentage(options);
  return (
    <ul className={s.statisticsList}>
      <li className={s.statisticsListItem}>Good: {options.good} </li>
      <li className={s.statisticsListItem}>Neutral: {options.neutral} </li>
      <li className={s.statisticsListItem}>Bad: {options.bad}</li>
      <li className={s.statisticsListItemTotal}>Total: {total}</li>
      <li className={s.statisticsListItemPositive}>
        Positiv feedback: {positivePercentage}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onTotal: PropTypes.func.isRequired,
  onPositivePercentage: PropTypes.func.isRequired,
};
