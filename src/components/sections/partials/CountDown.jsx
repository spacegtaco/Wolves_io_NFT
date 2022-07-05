import React from 'react';
import CountDownTimer from '../../elements/CountDownTimer';

const LIVE_DATE_IN_MS = new Date('July 5, 22 07:55:00 GMT+00:00');
 
const CountDown = () => {
  return (
    <div className='countdown-container'>
      <CountDownTimer targetDate={LIVE_DATE_IN_MS} />
    </div>
  );
};

export default CountDown;