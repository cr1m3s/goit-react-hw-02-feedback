import React from 'react';
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleTotal = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  onLeaveFeedback = e => {
    const target = e.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [target]: prevState[target] + 1,
    }));
  };

  render() {
    const buttons = Object.keys(this.state);
    return (
      <div className="App">
        <Section
          title="Please leave feedback"
          children={<FeedbackOptions options={buttons} onLeaveFeedback={this.onLeaveFeedback} />}
        />
        <Section
          title="Statistics"
          children={
            this.handleTotal() === 0 ? (
              <Notification message="No feedback given" />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.handleTotal()}
                positive={
                  this.state.good > 0
                    ? ((this.state.good / this.handleTotal()) * 100).toFixed(2).toString()
                    : '0'
                }
              />
            )
          }
        />
      </div>
    );
  }
}

export default App;
