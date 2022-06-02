import style from './Statistics.module.css';
import React from 'react';
import PropTypes from 'prop-types';

class Statistics extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positive: PropTypes.string,
  };

  render() {
    return (
      <ul className={style.chart}>
        <li className={style.rating}>Good: {this.props.good}</li>
        <li className={style.rating}>Neutral: {this.props.neutral}</li>
        <li className={style.rating}>Bad: {this.props.bad}</li>
        <li className={style.rating}>Total: {this.props.total}</li>
        <li className={style.rating}>Positive feedback:{this.props.positive}</li>
      </ul>
    );
  }
}

export default Statistics;
