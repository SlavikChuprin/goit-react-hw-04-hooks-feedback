import React, { Component } from 'react';
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const btnName = e.currentTarget.outerText;

    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
  };

  totalScore = state =>
    Object.values(this.state).reduce((total, option) => (total += option), 0);

  positivePercentage = state =>
    Math.round((this.state.good / this.totalScore()) * 100);
  render() {
    const nameButton = Object.keys(this.state);
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={nameButton}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        {this.totalScore(this.state) === 0 ? (
          <Notification message="No feedback given..." />
        ) : (
          <Section title="Statistics">
            <Statistics
              options={this.state}
              onTotal={this.totalScore}
              onPositivePercentage={this.positivePercentage}
            />
          </Section>
        )}
      </div>
    );
  }
}
