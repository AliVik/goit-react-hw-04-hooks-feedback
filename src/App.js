import { useState } from 'react';
import { Wrapper } from './common-styles/bg-image';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const OnBtnClick = evt => {
    switch (evt) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;
      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'Bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const CountTotalFeedback = () => {
    return good + neutral + bad;
  };
  const CountPositiveFeedbackPercentage = () => {
    const total = CountTotalFeedback();
    return total === 0 ? 0 : Math.round((good * 100) / total);
  };
  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={OnBtnClick}
        ></FeedbackOptions>
      </Section>
      {
        <Section title="Statistics">
          {CountTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={CountTotalFeedback()}
              positivePercentage={CountPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      }
    </Wrapper>
  );
}
