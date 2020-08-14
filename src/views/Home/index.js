// Basic
import React, { useEffect, useContext } from "react"

// Styles, images and UIs
import "./styles.scss"
import ImageJussi from '../../assets/images/image-jussi.png'
import TopToolbar from '../../components/TopToolbar'
import SlideshowBar from '../../components/SlideshowBar'
import StoreBar from '../../components/StoreBar'
import ContainerBase from '../../components/ContainerBase'
import ProductItem from '../../components/ProductItem'
import FooterPage from '../../components/FooterPage'

// Context
import { AppContext } from "../../context/main"

// API
import api from '../../services/api'

const Home = () => {
  const { state, setProductList } = useContext(AppContext);

  useEffect(() => {
    api.get(`/products.json?brand=essie`)
    .then((response) => {
      setProductList(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return(
    <div id="page-home">
      <TopToolbar />
      <SlideshowBar />
      <StoreBar />
      <ContainerBase>
        <h1 className="products">
          <span className="icon">//</span>&nbsp;
          <span className="text">Nossas soluções</span>
        </h1>
        <div className="productList">
          { state.length > 0 && state.map( (product) => <ProductItem key={product.id} product={product} /> ) }
        </div>
      </ContainerBase>
      
      <br /><br /><br /><br /><br /><br />
      
      <ContainerBase>
        <div className="aboutUs">
          <div className="text"> 
            <h2>Olá, somos<br />a Jüssi</h2>
            <p>
              A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento 
              voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais
               é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile 
               e User Behavior Analytics.
            </p>
            <a href="https://jussi.com.br/" target="_blank">Conheça a Jüssi</a>
          </div>
          <div className="image">
            <img src={ImageJussi} alt="Image Jussi" />
          </div>
        </div>
      </ContainerBase>

      <div className="contactArea">
        <p className="infoStore">Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.</p>
        <p className="infoContact">
          <span>Entre em contato</span>
          <a href="mailto:comercial@jussi.com.br">comercial@jussi.com.br</a>
        </p>
      </div>

      <FooterPage />
    </div>
  )
}

export default Home