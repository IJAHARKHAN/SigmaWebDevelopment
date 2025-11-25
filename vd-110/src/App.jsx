import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setshowBtn] = useState(true);

  //console.log("showBtn", showBtn);

  const contacts = [
    {
      id: 1,
      name: "Moon Khan",
      mobile: "9876543210",
      address: "123 Main St, New York, NY",
    },
    {
      id: 2,
      name: "Amit Sharma",
      mobile: "9123456780",
      address: "45 Park Ave, Mumbai, MH",
    },
    {
      id: 3,
      name: "Priya Singh",
      mobile: "9012345678",
      address: "78 Lake Rd, Bengaluru, KA",
    },
    {
      id: 4,
      name: "Rahul Verma",
      mobile: "9988776655",
      address: "9 Hill St, Chennai, TN",
    },
    {
      id: 5,
      name: "Neha Gupta",
      mobile: "9445566778",
      address: "56 River Rd, Kolkata, WB",
    },
  ];

  const VarComponent = ({ contacts }) => {
  //  console.log('contacts', contacts);
    return (
      <div
        style={{ margin: "10px 0px", border: "1px solid black" }}
       
      >
        <h4>Name: {contacts.name}</h4>
        <h5>Mobile:  {contacts.mobile} </h5>
        <h6>Address:  {contacts.address} </h6>
      </div>
    );
  };

  return (
    <>
      
      <h1>Conditional Rendering & Rendering Lists in React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button onClick={() => setshowBtn(!showBtn)}> Tootle Trigger</button>
          {showBtn && <button> Hide Show Button </button>}
        </div>
        {contacts &&
          contacts.map((contact) => <VarComponent contacts={contact} key={contact.id}/>)}

       
      </div>
      
    </>
  );
}

export default App;
