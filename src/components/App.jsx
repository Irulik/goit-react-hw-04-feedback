import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { GlobalStyled, MainTitle } from './Global.styled';

const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const { good, neutral, bad } = feedbackCounts;

  const onAddFeedback = (option) => {
    setFeedbackCounts(prevCounts => ({
      ...prevCounts,
      [option]: prevCounts[option] + 1
    }));
  };

  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good * 100) / total) : 0;
  const options = Object.keys(feedbackCounts);

  return (
    <>
      <GlobalStyled />
      <MainTitle>Feedback App</MainTitle>
      <Section title='Please, leave feedback!'>
        <FeedbackOptions options={options} onLeaveFeedback={onAddFeedback} />
      </Section>
      
      <Section title='Statistics'>
        {total > 0 ? (<Statistics
          goodCounter={good}
          neutralCounter={neutral}
          badCounter={bad}
          total={total}
          positivePercentage={positivePercentage} />) : (<Notification
            message='No feedback given' />
        )}
      </Section>
    </>
  );
};

export default App;