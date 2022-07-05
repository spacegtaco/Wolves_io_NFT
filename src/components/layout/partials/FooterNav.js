import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

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
          <Link to="#0">Values</Link>
        </li>
        <li>
          <Link to="#1">Vision</Link>
        </li>
        <li>
          <Link to="#2">About us</Link>
        </li>
        <li>
          <Link to="#3">Roadmap</Link>
        </li>
        <li>
          <Link to="#4">Team</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;