import React, { Component, useState } from 'react';
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    const btnName = e.currentTarget.outerText;
    switch (btnName) {
      case good:
        setGood(state => state + 1);
        break;

      case neutral:
        setNeutral(state => state + 1);
        break;

      case bad:
        setBad(state => state + 1);
        break;

      default:
        console.log('нет такой оценки');
    }
    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
  };

  totalScore = state =>
    Object.values(this.state).reduce((total, option) => (total += option), 0);

  positivePercentage = state =>
    Math.round((this.state.good / this.totalScore()) * 100);

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
