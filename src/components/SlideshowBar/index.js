// Basic
import React from "react"
//import Prod from '../../assets/images/prod.png'

// Styles, images and icons
import "./styles.scss"
import ContainerBase from '../ContainerBase'
import Slide1 from '../../assets/images/prod.JPG'
//<img src={prod} alt="prod" />


const SlideshowBar = () => {
  return(
    <div className="slideshowBar">
      <ContainerBase>     
        <img src={Slide1} alt="Slide1" />
      </ContainerBase>
    </div>
  )
}
    
export default SlideshowBar
