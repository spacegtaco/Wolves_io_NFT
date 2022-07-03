import React from 'react';
import {
    Grid
  } from "@mui/material";

  import './footer.css';
  import FbIcon from '../../assets/icons/FbIcon.svg';
  import TwitterIcon from '../../assets/icons/TwitterIcon.svg';
  import TiktokIcon from '../../assets/icons/TiktokIcon.svg';
  import IgIcon from '../../assets/icons/IgIcon.svg';
  import EmailIcon from '../../assets/icons/MailIcon.svg';
  
  
  function Footer() {
      
      
      return (
      <div className="footer">
      <Grid container spacing={2}>
      
          <Grid item xs="auto">
          <div className="socailIcons">
              <a href="https://www.facebook.com/WINSNFTio" target="_blank" rel="noreferrer">
              <img src={FbIcon} alt="Facebook icon"/>
              </a>
              </div>
          </Grid>
          <Grid item xs="auto">
          <div className="socailIcons">
              <a href="https://twitter.com/winsnftio" target="_blank" rel="noreferrer">
                  <img src={TwitterIcon} alt="Twitter icon"/>
              </a>
              </div>
          </Grid>
          <Grid item xs="auto">
          <div className="socailIcons">
              <a href="https://instagram.com/winsnftio" target="_blank" rel="noreferrer">
                  <img src={IgIcon} alt="Instagram icon"/>
              </a> 
              </div>
          </Grid>
          <Grid item xs="auto">
          <div className="socailIcons">
         
              <a href="https://tiktok.com/@winsnftio" target="_blank" rel="noreferrer">
              <img src={TiktokIcon} alt="Tiktok icon"/>
              </a>
              </div>
          </Grid>
          <Grid item xs="auto">
          <div className="socailIcons">
              <a href="mailto:winsnft.io@gmail.com" target="_blank" rel="noreferrer">
                  <img src={EmailIcon} alt="email icon"/>
              </a>
              </div>
          </Grid>
      
      </Grid>
      </div>
   )
   }   
  
  
  export default Footer
  