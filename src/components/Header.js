import React from 'react'
import { Link } from "gatsby";
import Footer from './Footer'
import avatar from '../assets/images/avatar.png'
import CookieConsent from 'react-cookie-consent';

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    <h1><strong>COMPRO ORO LASCARI (Palermo) <br />acquistiamo e valutiamo oro, argento e preziosi <a href="http://maps.google.com/?q=via Alcide de Gasperi, 64 Lascari, PA 90010 Italia/@38.000296,13.9391984" target="_blank">a Lascari (Palermo)</a>. <br /> 
                    Dal 1959.</strong></h1>
                </div>
                <Footer />
                <CookieConsent
                acceptOnScroll={true}
                acceptOnScrollPercentage={20}
                onAccept={() => {
                  alert("Consenso concesso");
                }}
          location="top"
          buttonText="Accetta"
          declineButtonText="Non accettare"
          cookieName="gatsby-gdpr-google-tagmanager">
Questo sito utilizza dei Cookies per rendere la navigazione il migliore possibile
</CookieConsent>
            </header>
        )
    }
}

export default Header
