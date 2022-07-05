import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Team = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'About The Pack',
    };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Twiiter / Instagram
                  </div>
                <h3 className="mt-0 mb-12">
                @Adz_Burns
                  </h3>
                <p className="m-0">
                Founder and creator- Adam Burns (Adz) is the founder of Wolves In NFT Street (WINS). A long time investor, flipper, entrepreneur, W3 enthusiast - this is Adz first project as a founder, having spent over a year developing the concept behind the scenes. Some of Adz other experience includes; Network and bridge builder with a background in ICT, Health and fitness, Business lover, educator, facilitator, community gatherer, leader and visionary. WIN$
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                 <img src={require('./../../assets/images/Adz_Burns.jpg')} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Twiiter / Instagram
                  </div>
                <h3 className="mt-0 mb-12">
                @CianElyseW
                  </h3>
                <p className="m-0">
                Managing Director- ALPHA LUNA- Cian Elyse W. (She/ Her) is an artist, and the owner of her own Indigenous arts company based in NZ. Cian has extensive experience in project management, arts direction and delivery of major events and festivals. Having built a solid career in film and television, this is Cian’s first NFT project as a team leader, and her overarching vision is to support other like minded women to bridge their web2 experience into the world of W3. Cian has experience in funding, business structure, leading capital projects and leading arts initiatives. 
                 </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                 <img src={require('./../../assets/images/CianElyseWhite.jpg')} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Twiiter / Instagram
                  </div>
                <h3 className="mt-0 mb-12">
                @Varelarts
                  </h3>
                <p className="m-0">
                WOLVES ARTIST- Artist & Creative Director Ruben Varela is an Illustrator, Graphic designer and painter from London but is better known by those in the creative world by his alias Varelarts. He has collaborated with the likes of Chris Brown, MTV, Fresh Prince Of Bel Air, Black Pyramid, and BBC to name a few. Over Varelarts creative years he has been pushing representation of ethnic minorities and genders through his art and has attracted hundreds of thousands of people by doing so. With Web 3 developing at its early stages, Ruben sees it as a great opportunity to carry on his mission and is excited to see what is to come in the Web 3 Meta Verse. WIN$
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                 <img src={require('./../../assets/images/RubenVarela.jpg')} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Twiiter / Instagram
                  </div>
                <h3 className="mt-0 mb-12">
                @JaneiLeota / J_Leotaa
                  </h3>
                <p className="m-0">
                BETA B2B Janei Leota is an investing and W3 enthusiast who likes diversity, future thinking and empowering people. She grew up in the small town of Huntly and has lived in Chile, the USA and now in Australia. With a Mechanical Engineering background generating a love for problem solving and numbers, and a thrive to always be better Janei has been looking at charts and finding better financial opportunities for the last 7 years. She has immersed herself in the world of Crypto, NFT's, AU Stocks, US Stocks just to name a few.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                 <img src={require('./../../assets/images/JaneiLeota.jpg')} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Twiiter / Instagram
                  </div>
                <h3 className="mt-0 mb-12">
                @Karnel / The Sydeny Bouncer
                  </h3>
                <p className="m-0">
                BETA Wolves Media - Nick Williams known by many as ‘The Sydney Bouncer’ or Karnel, was born and bred in West Auckland | NZ. Record label owner of DNK World Music via FMG Universal, Club promoter, Graphic designer, visual effects editor, Podcaster, Owner at Stash Box Collectables and Co Founder of Matai Watches, of all the roles he holds, his most important is being a father. His love for NFT comes from a passion of card collecting and being an early adaptor into NBA Top shot before transitioning into the big world of opensea. Karnel will lead Wolves Media with 22 years experience in the entertainment industry. 
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                 <img src={require('./../../assets/images/Karnel.jpg')} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Twiiter / Instagram
                  </div>
                <h3 className="mt-0 mb-12">
                @TheAlchemxst_
                  </h3>
                <p className="m-0">
                BETA Support Community- The Alchemxst (Clyde) is an entrepreneur who was born and raised in Auckland, New Zealand. Clyde has a diploma in exercise science and event management. However, even though Clyde was in the fitness industry for 8 years he had to leave due to injuries that affected his ability to train people. This forced him to look at other ways of being able to serve others which led him into the field of personal development and boxing coaching. After strictly focusing on those two areas the last two years, Clyde has now extended his pursuit of growth and development into the Web 3 and NFT space.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                 <img src={require('./../../assets/images/Clyde.jpg')} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Twiiter / Instagram
                  </div>
                <h3 className="mt-0 mb-12">
                @Aroyal.eth / CryptoWorlPage
                  </h3>
                <p className="m-0">
                BETA Marketing & Media - Aroyal.eth (Eniola .W. Ayeni) is a serial entrepreneur, real estate developer, crypto investor, NFT collector and founder of cryptoworldpage, one of the world’s fastest growing cryptocurrency news platforms.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                 <img src={require('./../../assets/images/EwAyeni.jpg')} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
