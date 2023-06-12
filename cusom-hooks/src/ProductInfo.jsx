import React from 'react'  
import { useResource } from './useResource';

function ProductInfo({ productId }) {
  const product = useResource(`/products/${productId}`);
  const { name, price, description, rating } = product || {};
 
  return ( 
     <>
       { product ? <>
                    <h3>{name}</h3>
                    <p>{price}</p>
                    <h3>Decription:</h3>
                    <p>{description}</p>
                    <p>Average Rating: {rating}</p>
                   </> 
                : ''
      }
      </>
  )
}

export default ProductInfo
