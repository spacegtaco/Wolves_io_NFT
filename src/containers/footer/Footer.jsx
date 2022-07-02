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


const Footer = () => {
    return (
    <div className="footer">
    <Grid container spacing={2}>
    
        <Grid item xs="auto">
        <div className="socailIcons">
            <a href="https://www.facebook.com/WINSNFTio" target="_blank" rel="noreferrer">
            <img src={fb_icon} alt="email icon"/>
            </a>
            </div>
        </Grid>
        <Grid item xs="auto">
        <div className="socailIcons">
            <a href="https://twitter.com/winsnftio" target="_blank" rel="noreferrer">
                <img src={twitter_icon} alt="email icon"/>
            </a>
            </div>
        </Grid>
        <Grid item xs="auto">
        <div className="socailIcons">
            <a href="https://instagram.com/winsnftio" target="_blank" rel="noreferrer">
                <img src={ig_icon} alt="email icon"/>
            </a> 
            </div>
        </Grid>
        <Grid item xs="auto">
        <div className="socailIcons">
            <a href="https://tiktok.com/@winsnftio" target="_blank" rel="noreferrer">
                <img src={tiktok_icon} alt="email icon"/>
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
