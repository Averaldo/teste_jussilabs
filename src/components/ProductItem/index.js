// Basic
import React from "react"

// Styles, images and icons
import "./styles.scss"

const ProductItem = (props) => {

  return(
    <div className="productItem">
      <img src={props.product.image_link} alt="Product Image" />
      <h3>{props.product.name}</h3>
      <p>
        {props.product.description}
      </p>
      <a href={props.product.product_link} target="_blank">Ver solução</a>
    </div>
  )
}
    
export default ProductItem
