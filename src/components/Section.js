import style from './Section.module.css';
import React from 'react';
import PropTypes from 'prop-types';

class Section extends React.Component {
  static defaultProps = {
    title: '',
  };

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <div className={style.section}>
        {this.props.title}
        {this.props.children}
      </div>
    );
  }
}

export default Section;
