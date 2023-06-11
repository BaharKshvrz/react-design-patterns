import React from 'react'

function LargePersonListItem({ preson }) {
  const { name, age, hairColor, hobbies } = preson;
 
  return (
    <>
       <h3>{name}</h3>
       <p>Age: {age} years</p>
       <p>Hari Color: {hairColor}</p>
       <h3>Hobbies:</h3>
       <ul>
         { hobbies.map(hobby => <li key={hobby}>{hobby}</li>) }
       </ul>
    </>
  )
}

export default LargePersonListItem
