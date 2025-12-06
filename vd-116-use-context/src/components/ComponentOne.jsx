import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/context'

function ComponentOne() {
    const {count, setCount} = useContext(AppContext);     
  return (
    <>
    <h2>ComponentOne: {count}</h2>
    </>
  )
}

export default ComponentOne