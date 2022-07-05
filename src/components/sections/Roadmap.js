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

const Roadmap = ({
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
    'hero section is-boxed is-boxed',
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
      <div className="container">
        <div className={innerClasses}>
         
          <div className="hero-content center-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Roadmap
            </h1>
         </div>
         <div>
         <h2 className="mt-0 mb-16" data-reveal-delay="200">
         Hunt Phase #1
            </h2>
            <ul className="list-reset list-roadmap">
                <li>
                <div>
                Build the discord, socials and website for Wolves In NFT St.
                </div>
                </li>
                <li>
                <div >
                Recruit the Wolves in NFT ST team consisting of the Alphas (Founder/ Managing director), Betas (Pack sector leaders) and Delta (business support for discord management, marketing platform activations, business planning, event management and pack initiatives). 
                </div>
                </li>
                <li>
                <div >
                Create the Wolves Stage one surveys and stage two interview process. Enlist the first 100 Wolves.
                </div>
                </li>
                <li>
                <div>
                Launch Wolves In NFT St to the public, in the lead up to mint July/ August 2022.
                </div>
                </li>
            </ul>
         </div>
        <div>
         <h2 className="mt-0 mb-16" data-reveal-delay="200">
         Hunt Phase #2
            </h2>
            <ul className="list-reset list-roadmap">
                <li>
                <div>
                Recruit a community of 888 Wolves to join the ‘Wolves Waiting List’ (WWL) and gain exclusive access to the private Wolves Den (Discord). 
                </div>
                </li>
                <li>
                <div >
                Create community workshops, hunts, and activations, to identify the 555 Wolves that will be ‘Wolf-listed’ to mint from the official collection.
             </div>
                </li>
                <li>
                <div >
                Project to mint End of July/ Early August.
                </div>
                </li>
            </ul>
         </div>  
         <div>
         <h2 className="mt-0 mb-16" data-reveal-delay="200">
         Hunt Phase #3
            </h2>
            <ul className="list-reset list-roadmap">
                <li>
                <div>
                WIN$ Tokenomics eco-system announced
                </div>
                </li>
                <li>
                <div >
                Prepare to stake your Wolf to generate the WIN$ token. All further benefits are tied to staking.
             </div>
                </li>
                <li>
                <div >
                WMW (Wolves Meet Wolves)- Wolves In NFT St Official Launch Party. Each Wolf receives VIP entry to the official launch party to be held in Brisbane Australia, in September 2022. A fully funded networking event and social gathering with live music, drinks, and entertainment, featuring Wolves Artists AJ Lawrence, Jamal (SWIDT Producer) with more to be announced. 
                </div>
                </li>
                <li>
                <div>
                Prepare to Launch the first Wolves In NFT St. derivative of 5,555 NFTs, and activate the allow-list sales pre-mint. Each official Wolf will receive an automatic allow list role when they mint their Wolves NFT.
                </div>
                </li>
            </ul>
         </div>  
         <div>
         <h2 className="mt-0 mb-16" data-reveal-delay="200">
         Hunt Phase #4
            </h2>
            <ul className="list-reset list-roadmap">
                <li>
                <div>
                Announce the business plan and project timeline for Derivative 2
                </div>
                </li>
                <li>
                <div >
                Wolves Business Academy (WBA). Announce the pilot programme for Wolves Business Academy which will include exclusive access to workshops, digital resources, in-person & digital events with a focus on building a startup business/ brand in the W3b space. 
             </div>
                </li>
            </ul>
         </div>  
         <div>
         <h2 className="mt-0 mb-16 " data-reveal-delay="200">
         Hunt Phase #5
            </h2>
            <ul className="list-reset list-roadmap">
                <li>
                <div>
                Launch the 1st & 2nd CCO Derivatives of 5,555 (each) free mint NFTs to the market, with a percentage of the income going to the Wolves community wallet. This will allow us to invest it directly back into Wolves projects and initiatives.

                </div>
                </li>
                <li>
                <div >
                Launch Wolves In NFT ST. W3 fashion, featuring the WBA (Wolves Business Academy) Varsity O.G. jackets.

             </div>
                </li>
                <li>
                <div >
                    Announce the Wolves Media Mind-map, including details regarding the release of the first official Wolves Artists EP. 
                </div>
                </li>
               
            </ul>
         </div>  
         </div>
        </div> 
    </section>
  );
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;