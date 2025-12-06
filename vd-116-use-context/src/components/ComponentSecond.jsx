import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/context'

function ComponentSecond() {
    const {count, setCount} = useContext(AppContext);
  return (
    <>
    <h2>ComponentSecond {count}</h2>
    </>
    
  )
}

export default ComponentSecond