import React from "react"
import "./styles.scss"
import logo from "../../assets/images/logo.jpeg"
import lupa from "../../assets/images/lupa.JPG"
import carrinho from "../../assets/images/carrinho.JPG"


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
        <div className="right"> 
            <nav>
              <a href="#">Buscar</a> 
              <img src={lupa} alt="Lupa" />
              <a href="#">Login</a>  
              <img src={carrinho} alt="Carrinho" />
            </nav> 
        </div> 
           </div> 
              <div class="banner" style={{backgroundColor:"#03FFA5",marginTop:"-35px", width: "1440px",height: "230px",}}>
                <p>
                  teste banner
                </p>
              </div>
              <div class="banner" style={{backgroundColor:"#F2F2F2", marginTop:"-15px", width: "1440px",height: "30px",}}>
                <p>
                teste banner
                </p>
              </div>
        </div> 
  )
}

export default Home