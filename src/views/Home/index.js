import React from "react"
import "./styles.scss"
import logo from "../../assets/images/logo.jpeg"

const Home = () => {
  return(
    <div id="page-home">
      <div className="top">
        <div className="left">
          <img src={logo} alt="Logo" /> 
          <nav>
            <a href="#">Nossas soluções</a> 
            <a href="#">Conheça a Jüssi</a>      
          </nav>
        </div> 
        <div className="right">2</div> 
        
      </div> 
    </div>
  )
}

export default Home