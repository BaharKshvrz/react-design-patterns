import React from 'react'  

function ProductInfo({ product }) {
  const { name, price, decription, rating } = product;
 
  return (
    <>
       <h3>{name}</h3>
       <p>{price}</p>
       <h3>Decription:</h3>
       <p>{decription}</p>
       <p>Average Rating: {rating} </p>
    </>
  )
}

export default ProductInfo
