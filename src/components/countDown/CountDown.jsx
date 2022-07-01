import React from 'react';
import CountDownTimer from '../../CountDownTimer';
import '../../App.css';
import './CountDown.css';

const LIVE_DATE_IN_MS = new Date('July 1, 22 08:0:00 GMT+00:00');
 
const CountDown = () => {
  return (
    <div className='countdown-container'>
      <CountDownTimer targetDate={LIVE_DATE_IN_MS} />
    </div>
  );
};

export default CountDown;
