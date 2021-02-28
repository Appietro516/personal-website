import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const NetworkButtons = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={0} distance="30px">
      <div className="networkbuttons">
        <div className="top-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  color="black"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'}`} />
                </a>
              );
            })}
        </div>
      </div>
    </Fade>
  );
};

export default NetworkButtons;
