import style from './FeedbackOptions.module.css';
import React from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends React.Component {
  static defaultProps = {
    options: [],
  };

  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={style.panel}>
        {this.props.options.map(button => (
          <button
            className={style.button}
            value={button}
            key={button}
            type="button"
            onClick={e => this.props.onLeaveFeedback(e)}
          >
            {button}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
