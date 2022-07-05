import React from 'react';
// import sections
import Values from '../components/sections/Values';
import Vision from '../components/sections/Vision';
import AboutUs from '../components/sections/AboutUs';
import Roadmap from '../components/sections/Roadmap';
import Team from '../components/sections/Team';
import Wolves from '../components/sections/Wolves';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Discord from '../components/sections/Discord';

const Home = () => {

  return (
    <>
      <Vision bottomDivider />
      <Values topDivider />
      <Discord topDivider />
      <AboutUs topDivider />
      <Roadmap topDivider/>
      <Team imageFill topDivider/>
    </>
  );
}

export default Home;