import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Logo from './partials/Logo';
import SmoothScroll from '../elements/SmoothScroll';


const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideButton: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideButton: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideButton,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {


const history = useHistory();
console.log(history.location);

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
ref={nav}
className={
  classNames(
    'header-nav',
    isActive && 'is-active'
  )}>
<div className="header-nav-inner">
  <ul className={
    classNames(
      'list-reset text-xs',
      navPosition && `header-nav-${navPosition}`
    )}>
    <li>
    <SmoothScroll
            smooth={true}
            duration={500}
            className={""}
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
        className={""}
        to="values"
        onClick={() => history.push("/?id=values")}
      >
        VALUES
      </SmoothScroll>
      </li>
      <li>
    <SmoothScroll
        smooth={true}
        duration={500}
        className={""}
        to="aboutus"
        onClick={() => history.push("/?id=aboutus")}
      >
        ABOUT US
      </SmoothScroll>
      </li>
    <li>
    <SmoothScroll
        smooth={true}
        duration={500}
        className={""}
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
        className={""}
        to="team"
        onClick={() => history.push("/?id=team")}
      >
        TEAM
      </SmoothScroll>
        </li>
      </ul>
      {!hideButton &&
    <ul
      className="list-reset header-nav-right"
    >
      <li>
        <Link to="https://discord.gg/eVWhRYnT" className="button button-primary button-wide-mobile button-sm" onClick={closeMenu}>Discord</Link>
      </li>
    </ul>}

</div>
</nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

