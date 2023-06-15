import React from 'react'
import ProductCardImage from './ProductCardImage';
import ProductCardTitle from './ProductCardTitle';
import ProductCardDescription from './ProductCardDescription';

const ProductCard = ({children}) => {
  return (
    <div>
       {children}
    </div>
  )
}

ProductCard.Image = ProductCardImage;
ProductCard.Title = ProductCardTitle;
ProductCard.Desctiption = ProductCardDescription;

export default ProductCard
