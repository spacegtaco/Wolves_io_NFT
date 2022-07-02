import React from 'react';
import {
    Grid,
    Item,
    Box,
    Container,
    makeStyles,
    IconButton,
    Hidden,
  } from "@material-ui/core";

import './footer.css';
import fb_icon from '../../assets/social icons/fb_icon.svg';
import twitter_icon from '../../assets/social icons/twitter_icon.svg';
import tiktok_icon from '../../assets/social icons/tiktok_icon.svg';
import ig_icon from '../../assets/social icons/ig_icon.svg';
import email_icon from '../../assets/social icons/mail_icon.svg';



const tiktokSvg = () => {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="35"
          viewBox="0 0 30 35"
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="#FFF">
              <path d="M22.296.83c.26 2.172.979 3.883 2.145 5.07 1.134 1.154 2.727 1.837 4.757 1.962.458.032.802.41.802.861v5.312c0 .472-.375.86-.843.86-1.416.137-2.738-.03-4.06-.45-.896-.284-1.791-.683-2.718-1.176v8.44c0 3.999-1.311 7.2-3.3 9.447-1.457 1.648-3.269 2.792-5.215 3.38-1.947.588-4.019.63-5.976.053-2.405-.704-4.633-2.32-6.215-4.934C.663 27.985.08 25.97.007 23.923c-.062-1.89.291-3.82 1.135-5.563a10.738 10.738 0 014.06-4.483c1.832-1.133 4.185-1.858 7.1-1.963a.86.86 0 01.885.83v5.626a.864.864 0 01-.781.861 28.8 28.8 0 00-1.239.252c-.406.094-.801.21-1.187.346-1.093.368-1.936.893-2.436 1.596-.489.682-.687 1.585-.52 2.76.218 1.586 1.405 2.783 2.81 3.265.584.2 1.198.284 1.791.22a3.44 3.44 0 001.645-.618c1.27-.914 2.134-2.887 1.874-6.257V.861c0-.473.385-.861.854-.861h5.444c.459 0 .823.357.854.808V.83zm.927 6.277c-1.302-1.323-2.145-3.129-2.52-5.354h-3.852v18.99c.302 4.041-.885 6.497-2.592 7.736a5.08 5.08 0 01-2.457.945 5.782 5.782 0 01-2.53-.305c-1.967-.682-3.622-2.382-3.945-4.66-.23-1.648.083-2.971.833-4.01.728-1.019 1.863-1.732 3.29-2.215.426-.147.874-.273 1.332-.389.24-.063.468-.115.708-.157V13.72c-2.186.189-3.977.787-5.382 1.659a9.053 9.053 0 00-3.415 3.768 10.066 10.066 0 00-.968 4.745c.062 1.753.552 3.474 1.416 4.892 1.343 2.215 3.216 3.59 5.236 4.167 1.635.472 3.373.44 5.018-.052a9.67 9.67 0 004.425-2.877c1.728-1.952 2.862-4.755 2.862-8.303v-9.92c0-.147.042-.304.125-.44a.847.847 0 011.177-.295c1.29.777 2.478 1.375 3.644 1.743.884.283 1.77.42 2.675.42V9.52c-2.092-.273-3.779-1.092-5.06-2.393l-.02-.021z"></path>
            </g>
          </g>
        </svg>
      );
};

const Footer = () => {
    return (
    <div className="footer">
    <Grid container spacing={2}>
    
        <Grid item xs="auto">
        <div className="socailIcons">
            <a href="https://www.facebook.com/WINSNFTio" target="_blank" rel="noreferrer">
            <img src={fb_icon} alt="Facebook icon"/>
            </a>
            </div>
        </Grid>
        <Grid item xs="auto">
        <div className="socailIcons">
            <a href="https://twitter.com/winsnftio" target="_blank" rel="noreferrer">
                <img src={twitter_icon} alt="Twitter icon"/>
            </a>
            </div>
        </Grid>
        <Grid item xs="auto">
        <div className="socailIcons">
            <a href="https://instagram.com/winsnftio" target="_blank" rel="noreferrer">
                <img src={ig_icon} alt="Instagram icon"/>
            </a> 
            </div>
        </Grid>
        <Grid item xs="auto">
        <div className="socailIcons">
            <a href="https://tiktok.com/@winsnftio" target="_blank" rel="noreferrer">
            <img src={tiktok_icon} alt="tiktok icon"/>
            </a>
            </div>
        </Grid>
        <Grid item xs="auto">
        <div className="socailIcons">
            <a href="mailto:winsnft.io@gmail.com" target="_blank" rel="noreferrer">
                <img src={email_icon} alt="email icon"/>
            </a>
            </div>
        </Grid>
    
    </Grid>
    </div>
 )
 }   


export default Footer
