import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link, useHistory, useLocation } from 'react-router-dom';
import SmoothScroll from '../../elements/SmoothScroll';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';

const propTypes = {
  hideButton: PropTypes.bool
}
const defaultProps = {
  hideButton: false
}


const FooterNav = ({
  className,
  hideButton,
  ...props
}) => {

  const history = useHistory();
  console.log(history.location);

  const classes = classNames(
    'footer-nav',
    className
  );


  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
      <li>
      <SmoothScroll
        smooth={true}
        duration={500}
        className={classes}
        to="vision"
        onClick={() => history.push("/?id=vision")}
      >
        VISION
      </SmoothScroll>
        </li>
        <li>
        <SmoothScroll
        smooth={true}
        duration={500}
        className={classes}
        to="values"
        onClick={() => history.push("/?id=values")}
      >
        VALUES
      </SmoothScroll>
        </li>
        {!hideButton &&<li>
        <ButtonGroup>
        <Button tag="a" color="primary" wideMobile href="https://discord.gg/eVWhRYnT">
                    DISCORD
         </Button>
      </ButtonGroup>
        </li>}
        <li>
          <Link to="#aboutus">About us</Link>
        </li>
        <li>
        <SmoothScroll
        smooth={true}
        duration={500}
        className={classes}
        to="roadmap"
        onClick={() => history.push("/?id=roadmap")}
      >
        ROADMAP
      </SmoothScroll>
      
        </li>
        <li>
          <SmoothScroll
        smooth={true}
        duration={500}
        className={classes}
        to="team"
        onClick={() => history.push("/?id=team")}
      >
        TEAM
      </SmoothScroll>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;