import React from 'react'

const SmallPersonListItem = ({ preson }) => {
  const { name, age } = preson;

  return (
     <p> Name: {name}, Age: {age} years old </p>
  )
}

export default SmallPersonListItem
