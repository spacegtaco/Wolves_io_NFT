import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import WolfWhite from './../../assets/images/WolfWhite.svg';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const AboutUs = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {


  const outerClasses = classNames(
    'hero section aboutus',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
      id="aboutus"
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-figure illustration-element-01">
            <Image
                src={WolfWhite} 
                alt="Wins Wolf"
                width={300}
                height={200} />
          </div>
          <div className="hero-content">
            <div className="container">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Wolves In NFT St is a collection of 555 hand drawn, anime inspired NFTs, created by London based visual artist, Varelarts (Ruben Varela), founded by Sydney based NFT Enthusiast and Weeb, Adam Burns (Adz).                
            </p>
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
            Wolves In NFT St (WINS) was born from the desire to foster and nurture the growth of an NFT project, run for the community by the community. A collective of people with mid to entry level NFT knowledge, who are looking for a safe space to connect and expand their awareness of the NFT world and how it can serve their individual aspirations, alongside likeminded individuals with similar growth mindsets. Why Wolves? Because they are hunters; intelligent, strong, driven and fiercely loyal to the pack. Wolves are ultimate team players. 
            </p>
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
            A play on words from the film title ‘Wolf of Wall St’ and infused with the founders love for Anime and storytelling, our aim is to build a catalogue of tools, resources, and network connections for business owners, entrepreneurs, artists, and those who aspire to explore the bridge from W2 to W3b. As the pack grows, so too will our knowledge, experience, and development in the space, as well as our network connections. With a focus on personal development as well as balancing the aspects of everyday life, the Pack will support each other and share resources, whilst traversing the vast landscape of this new digital paradigm, in hunt of our next meal.  
                </p>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Like a Wolf Pack, we move as one, driving towards our respective aspirations in the world of NFTS, unlocking our potential as individuals whilst growing exponentially as a collective.
                </p>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Are you ready to join the pack? 
                </p>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Together we will grow, Together we will eat, Together we will win.
                </p>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Wolves In NFT St.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

AboutUs.propTypes = propTypes;
AboutUs.defaultProps = defaultProps;

export default AboutUs;