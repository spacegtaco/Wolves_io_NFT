import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import FbIcon from './../../../assets/images/FbIcon.svg';
import TwitterIcon from './../../../assets/images/TwitterIcon.svg';
import TiktokIcon from './../../../assets/images/TiktokIcon.svg';
import IgIcon from './../../../assets/images/IgIcon.svg';
import EmailIcon from './../../../assets/images/MailIcon.svg';




const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <div className="socailIcons">
            <Link to="https://www.facebook.com/WINSNFTio">
              <Image
                src={FbIcon} 
                alt="Facebook icon"
                width={32}
                height={32} />
            </Link>
          </div>
        </li>
        <li>
          <div className="socailIcons">
            <Link to="https://twitter.com/winsnftio">
              <Image
                src={TwitterIcon} 
                alt="Twitter icon"
                width={35}
                height={32} />
            </Link>
          </div>
        </li>
        <li>
          <div className="socailIcons">
            <Link to="https://instagram.com/winsnftio">
              <Image
                src={IgIcon} 
                alt="Instagram icon"
                width={30}
                height={30} />
            </Link>
          </div>
        </li>
        <li>
          <div className="socailIcons">
            <Link to="https://tiktok.com/@winsnftio">
              <Image
                src={TiktokIcon} 
                alt="Tiktok icon"
                width={27}
                height={32} />
            </Link>
         </div>
        </li>
        <li>
          <div className="socailIcons">
            <Link to="mailto:winsnft.io@gmail.com">
              <Image
                src={EmailIcon} 
                alt="email icon"
                width={32}
                height={32} />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;