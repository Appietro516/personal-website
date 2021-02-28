import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={100} distance="30px">
          <h1 className="hero-title">
            {title || "Hi, I'm"}{' '}
            <span className="text-color-main">{name || 'Anthony Pietrofeso'}</span>
            <br />
            {subtitle || 'Software Engineer'}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={200} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero mr-3">
              <Link to="about" smooth duration={200}>
                {cta || 'Learn more'}
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to="contact" smooth duration={200}>
                Contact
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
