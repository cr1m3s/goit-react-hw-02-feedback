import style from './Notification.module.css';
import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  static defaultProps = {
    message: '',
  };

  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    return <p className={style.notification}>{this.props.message}</p>;
  }
}

export default Notification;
