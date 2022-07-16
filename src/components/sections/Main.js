import React from 'react'
import videoBg from './../../assets/videos/WIN_PROMO_VID.mp4';
import imageBgMobile from './../../assets/images/bgWolfMobile.jpg';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import discordLogo from './../../assets/images/discordLogo.png';


const MainDesktop = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay muted loop/>
        <div className="content">
            <h1>Full site coming soon</h1>
            <ButtonGroup>
            <image src={discordLogo} />
            <Button tag="a" color="dark" wideMobile href="https://discord.gg/YHSHqqa9DF" >
                   Join Disocrd
                    </Button>
                </ButtonGroup>
        </div>
    </div>
  );
};

const MainMobile = () => {
    return (
      <div className='main'>
          <div className="overlay"></div>
          <image src={imageBgMobile} />
          <div className="content">
              <h1>Full site coming soon</h1>
              <ButtonGroup>
              <image src={discordLogo} />
                    <Button tag="a" color="dark" wideMobile href="https://discord.gg/YHSHqqa9DF">
                    Join Discord
                      </Button>
                  </ButtonGroup>
          </div>
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
