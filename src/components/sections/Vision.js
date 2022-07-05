import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Vision = ({
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
    'vision hero section center-content ',
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
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Welcome to the Wolves
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              We are wild and spiritual hunters, devourers of information, consuming all in our path to learn, teach, and win. We work in packs, dedicated teams who operate through primal instinct, crossing physical and digital planes of this world in search of new opportunities to feed our family. We are wolves, building inter-generational wealth, doing our part to grow, thrive and survive as one. Voraciously dedicated to our to our vision, we are exclusive x inclusive, a Society of entrepreneurial beasts who are prepared to push all boundaries, howl at the moon of our lofty ambitions and unleash the potential within. ALPHA is our prey; Education is our Way and W3b is our play. 
Welcome to the Wolf Market. Are you ready to join the pack?
         </p>
         </div>
         <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Our Vision
            </h2>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              To bring together a network collective of NFT enthusiasts, entrepreneurs’, artists, and business owners, creating an
ecosystem of high-quality services and utilities.
                </p>
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
            Our Aim: To explore W3b in a safe space, to support each other by sharing resources, network connections and life data. 
              </p>
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
            Our Why: To create life-long connections and live our lives on our own terms. To create liberation through financial sovereignty, creative freedom and a dedication to exponential growth- in all avenues of life. 
                 </p>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Together we grow, Together we eat, Together we win$.
                 </p>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Vision.propTypes = propTypes;
Vision.defaultProps = defaultProps;

export default Vision;