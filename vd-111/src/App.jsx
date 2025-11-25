import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [getAllData, setgetAllData] = useState([]);
  const [loader, setloader] = useState(false);

  // https://jsonplaceholder.typicode.com/posts

  const fetchData = async () => {
    setloader(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setgetAllData(data);
      setloader(false);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container my-3">
        {loader && <h3>Fetching Data...</h3>}
        <div className="d-flex gap-2 align-items-center flex-wrap">
          {getAllData &&
            getAllData.map((item, index) => {
              return (
                <div className="card" style={{ width: "18rem" }} key={item.id}>
                  <div className="card-body">
                    <span class="badge rounded-pill text-bg-dark">
                      {index + 1}
                    </span>
                    <h6 className="card-title">{item.title}</h6>

                    <p className="card-text">{item.body}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
