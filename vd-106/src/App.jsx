import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {

  const [count, setCount] = useState(2);
  const prevCount = useRef();
  const btnDom = useRef();
  const refValue = useRef(`मैं useRef की value हूँ`);

  useEffect(() => {
    prevCount.current = count; // हर बार नई value save करते रहो
    btnDom.current.style.backgroundColor = "red";
   //  refValue.current = 10;
    console.log("refValue:", refValue.current);
  }, []);


  return (
    <>
      <Navbar/>
      <Card title="Heading One" titleName="Heading Two" titleText="Heading Three"/>
      {/* <Card title="Heading One2" titleName="Heading Two2" titleText="Heading Three2"/>
      <Card title="Heading One3" titleName="Heading Two3" titleText="Heading Three3"/> */}

    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* <h2>useRef Example: Previous Value {refValue.current}</h2> */}
      <h2>useRef in text: {refValue.current}</h2>
      <h3>Current Count: {count}</h3>
      <h3>Previous Count: {prevCount.current}</h3>
      <button ref={btnDom} onClick={() => setCount(count + 1)}>+ बढ़ाओ</button>
      <button onClick={() => {btnDom.current.style.backgroundColor = "green"}}>
+       बटन का रंग बदलो
+     </button>
    </div>


    </>
  )
}

export default App
