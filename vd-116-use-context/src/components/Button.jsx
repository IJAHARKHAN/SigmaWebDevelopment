import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/context'

function Button() {
    const {count, setCount} = useContext(AppContext);
  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default Button