import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import CountDown from '../../components/sections/partials/CountDown'


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Discord = ({
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
    'discord section center-content is-boxed',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'discord-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
      id="discord"
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="discord-content">
            <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Are you ready to join?
            </h2>
        
            <div className="reveal-from-bottom" data-reveal-delay="400">
                <ButtonGroup>
                  <Button tag="a" color="dark" wideMobile href="https://discord.gg/eVWhRYnT">
                    Join The Wolves Discord
                    </Button>
                </ButtonGroup>
            </div>
            <div className="reveal-from-bottom countdown-section" data-reveal-delay="600">
            <h4>Time remaining to join</h4>
            <CountDown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Discord.propTypes = propTypes;
Discord.defaultProps = defaultProps;

export default Discord;