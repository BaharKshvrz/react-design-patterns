import React from 'react'

function LargeProductListItem({ product }) {
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

export default LargeProductListItem
