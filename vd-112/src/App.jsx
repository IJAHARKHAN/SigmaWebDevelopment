import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [sendForm, setsendForm] = useState({name:'', mobile:''})

  const handleClick = () => {
    alert('Button Clicked')
  }


  const handleChange = (e) => {
    setsendForm({
      ...sendForm,
      [e.target.name]: e.target.value
    })

    console.log(sendForm);

  }

  // console.log(sendForm);
  return (
    <>
      <h1>Handling Event</h1>

      <button onClick={handleClick}>OnClick</button>


 <input type="text" placeholder='Enter Name' name='name' value={sendForm.name} onChange={handleChange}/>
 <input type="text" placeholder='Enter Mobile' name='mobile' value={sendForm.mobile} onChange={handleChange}/>

    </>
  )
}

export default App
