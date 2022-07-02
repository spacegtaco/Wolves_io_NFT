import React from 'react';
import './wolves.css';
import { CountDown } from '../../components';
import bg from '../../assets/Wins__bg.jpg';
import Footer from '../footer/Footer';

const Wolves = () => {
  return (
    <div className="wolves__header section__padding" id="home">
      <div className="wolves__header-content">
        
     
      </div>
      <Footer />
      <img src={bg} id="bg" alt=""></img>
    </div>
  )
}

export default Wolves

