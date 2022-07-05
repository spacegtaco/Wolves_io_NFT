import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Values = ({
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
    'hero section center-content',
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
            We Are The Wolves
            </h1>

            <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Traversing the vast plains of W3b as a pack, ready to hunt, ready to eat and ready to win.  
            </h3>
            <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200"> WWT <span>- Wolves Work Together</span></h2>
            <h4>Let the hunt begin.</h4>

            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              We are wild and spiritual hunters, devourers of information, consuming all in our path to learn, teach, and win. We work in packs, dedicated teams who operate through primal instinct, crossing physical and digital planes of this world in search of new opportunities to feed our family. We are wolves, building inter-generational wealth, doing our part to grow, thrive and survive as one. Voraciously dedicated to our to our vision, we are exclusive x inclusive, a Society of entrepreneurial beasts who are prepared to push all boundaries, howl at the moon of our lofty ambitions and unleash the potential within. ALPHA is our prey; Education is our Way and W3b is our play. 
Welcome to the Wolf Market. Are you ready to join the pack?
         </p>
         </div>
         <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
         There are 6 values that represent 6 wolves in a pack.
            </h2>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              To bring together a network collective of NFT enthusiasts, entrepreneurs’, artists, and business owners, creating an
ecosystem of high-quality services and utilities.
                </p>
            <ul className="list-reset list-capital">
                <li>
                <div>
                <span className="capital">W</span> - inning: ultimate success at its highest level
                </div>
                </li>
                <li>
                <div >
                <span className="capital">O</span> - pportunities: a network of choices to unlimited options
                </div>
                </li>
                <li>
                <div >
                <span className="capital">L</span> - oyalty: to the W.O.L.V.E.S
                </div>
                </li>
                <li>
                <div>
                <span className="capital">V</span> - oracious: Devouring information to WIN$
                </div>
                </li>
                <li>
                <div>
                <span className="capital">E</span> - ducation: to teach learn and to grow 
                </div>
                </li>
                <li>
                <div>
                <span className="capital">S</span>  - ecret society: a discreet pack of wolves Exclusive X Inclusive
                </div>
                </li>
            </ul>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Values.propTypes = propTypes;
Values.defaultProps = defaultProps;

export default Values;

