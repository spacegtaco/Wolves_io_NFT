import React from 'react'
import videoBg from './../../assets/videos/WIN_PROMO_VID.mp4';
import imageBg from './../../assets/images/bgWolf.jpg';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';


const MainMobile = () => {
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
  );
};

const MainDesktop = () => {
    return (
      <div className='main'>
          <div className="overlay"></div>
          <image src={imageBg} />
          <div className="content">
              <h1>Full site coming soon</h1>
              <ButtonGroup>
                    <Button tag="a" color="dark" wideMobile href="https://discord.gg/YHSHqqa9DF">
                      Join The Discord
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

const MobileComponent = () => <MainDesktop />;
const DesktopComponent = () => <MainMobile />;

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
