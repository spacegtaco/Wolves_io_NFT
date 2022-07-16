import React from 'react'
import videoBg from './../../assets/videos/Wolf_Promo_Video_bg.mp4';
import imageBgMobile from './../../assets/images/bgWolfMobile.jpg';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import discordLogo from './../../assets/images/discordLogo.png';
import classNames from 'classnames';
import Image from '../elements/Image';
import WolfWhite from './../../assets/images/WolfWhite.svg';




const MainDesktop = () => {
  return (
    <div className='main'>
            
        <div className="content">

        <Image
                src={WolfWhite} 
                alt="Wins Wolf"
                width={200}
                height={150} />
           
            <div className='content-button'>
            <h1>Full site coming soon</h1>
            <ButtonGroup>
              
            <Button tag="a" color="dark" wideMobile href="https://discord.gg/YHSHqqa9DF" >
            <img className={classNames} src={discordLogo} />
             Join Disocrd
                    </Button>
                </ButtonGroup>
        </div>
        </div>
        <video src={videoBg} autoPlay muted loop/>
    </div>
  );
};

const MainMobile = () => {
    return (
     
        
          <div className="content mobile">
          <Image
          className="logo"
                src={WolfWhite} 
                alt="Wins Wolf"
                width={200}
                height={150} />
           
            <div className='content-button'>
            <h1>Full site coming soon</h1>
            <ButtonGroup>
              <Button tag="a" color="dark" wideMobile href="https://discord.gg/YHSHqqa9DF" >
            <img className={classNames} src={discordLogo} />
             Join Disocrd
                    </Button>
                  </ButtonGroup>
          </div>
          <Image
                src={imageBgMobile} 
                alt="Wins Wolf"
                className="bgImage" />
           
        </div>
      
 
    );
  };

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => <MainMobile />;
const DesktopComponent = () => <MainDesktop />;

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Main() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}
