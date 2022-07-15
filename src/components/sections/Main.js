import React from 'react'
import videoBg from './../../assets/videos/WIN_PROMO_VID.mp4'
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay muted loop/>
        <div className="content">
            <h1>Full site coming soon</h1>
            <ButtonGroup>
                  <Button tag="a" color="dark" wideMobile href="https://discord.gg/YHSHqqa9DF">
                    Join The Discord
                    </Button>
                </ButtonGroup>
        </div>
    </div>
  )
}

export default Main