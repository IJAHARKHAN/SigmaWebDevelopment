import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'
import ComponentOne from './components/ComponentOne'
import { AppContext } from './context/context'
import ComponentSecond from './components/ComponentSecond'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <AppContext.Provider value={{count, setCount}}>
       <h1>useContext Hook</h1>

       <Button/>
    
      <ComponentOne/>

      <ComponentSecond/>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
       </div>
        </AppContext.Provider>
      
     
    </>
  )
}

export default App
