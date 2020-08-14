// Basic
import React, { useState, useContext } from "react"

// Styles, images and icons
import "./styles.scss"
import logo from "../../assets/images/logo.svg"
import lupa from "../../assets/images/lupa.JPG"
import shoppingCart from '../../assets/images/shopping-cart.svg'

// Context
import { AppContext } from "../../context/main"

// API
import api from '../../services/api'

const TopToolbar = () => {
  const [searchText, setSearchText] = useState("");
  const { setProductList } = useContext(AppContext);

  function search() {
    if(searchText.length > 3) {
      api.get(`/products.json?brand=${searchText}`)
        .then((response) => {
          setProductList(response.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  function handleSearch(event) {
    setSearchText(event.target.value)
  }

  return(
    <div className="topToolbar">
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
            <div className="searchBox">
              <input type="text" name="search" value={searchText} placeholder="Buscar" onChange={handleSearch} />
              <img src={lupa} alt="Lupa" onClick={search} />
            </div>
            <a href="#">Login</a>  
            <a href="#"><img src={shoppingCart} alt="Carrinho" /></a>
          </nav> 
        </div> 
      </div>
    </div>
  )
}
    
export default TopToolbar
