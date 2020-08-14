// Basic
import React from "react"

// Styles, images and icons
import "./styles.scss"
import ContainerBase from '../ContainerBase'
import Wppcompany from '../../assets/images/wppcompany.png'
import FacebookIcon from '../../assets/images/facebook.png'
import InstagramIcon from '../../assets/images/instagram.png'
import LinkedinIcon from '../../assets/images/linkedin.png'

const FooterPage = () => {
  return(
    <div className="footer">
      <div className="newsletter">
        <p><span>//</span>receba novidades da nossa área de produtos digitais.</p>
        <div className="newsletterBox">
          <input type="text" placeholder="Digite seu e-mail" />
          <a href="#">Cadatrar</a>
        </div>
      </div>
      <div className="socialmedia">
        <ContainerBase>
          <div className="divisor">
            <div className="logo">
              <img src={Wppcompany} alt="wppcompany" />
            </div>
            <div className="medias">
              <a href="#"><img src={FacebookIcon} alt="Facebook" /></a>
              <a href="#"><img src={InstagramIcon} alt="Instagram" /></a>
              <a href="#"><img src={LinkedinIcon} alt="Linkedin" /></a>
            </div>
          </div>
        </ContainerBase>
      </div>
    </div>
  )
}
    
export default FooterPage
