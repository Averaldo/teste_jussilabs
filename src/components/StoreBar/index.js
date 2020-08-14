// Basic
import React from "react"

// Styles, images and icons
import "./styles.scss"
import ContainerBase from '../ContainerBase'
import brastemp from '../../assets/images/logo-brastemp.png'
import consul from '../../assets/images/logo-consul-1.png'
import consul1 from '../../assets/images/logo-consul.png'
import thebar from '../../assets/images/logo-thebar.png'

const StoreBar = () => {
  return(
    <div className="storeBar">
      <ContainerBase>
        <div className="storeContent">
          <div className="label">
            <h6> Nossas principais lojas VTEX</h6>
          </div>
          <div>→</div>
          <div className="stores">
            <img src={brastemp} alt="brastemp" />
            <img src={consul} alt="consul" />
            <img src={consul1} alt="consul1" />
            <img src={thebar} alt="thebar" />
          </div>
        </div>
      </ContainerBase>
    </div>
  )
}
    
export default StoreBar
