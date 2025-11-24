import React from 'react'

function Card(props) {
    console.log(props)
  return (
   <>
   <div>
    <h1>{props.title}</h1>
   <h2>{props.titleName}</h2>
   <h3>{props.titleText}</h3>
   </div>
   
   
   </>
  )
}

export default Card