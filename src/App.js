import React, { useState } from 'react';
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
    console.log(btnName);
    switch (btnName) {
      case 'good':
        setGood(state => state + 1);
        console.log(good);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        console.log(neutral);
        break;

      case 'bad':
        setBad(state => state + 1);
        console.log(bad);
        break;

      default:
        console.log('нет такой оценки');
    }
  };

  let totalScore = good + neutral + bad;

  let positivePercentage = Math.round((good / totalScore) * 100);

  const nameFeedbacks = ['good', 'neutral', 'bad'];
  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={nameFeedbacks}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      {totalScore === 0 ? (
        <Notification message="No feedback given..." />
      ) : (
        <Section title="Statistics">
          <Statistics
            options={[good, neutral, bad]}
            onTotal={totalScore}
            onPositivePercentage={positivePercentage}
          />
        </Section>
      )}
    </div>
  );
}
