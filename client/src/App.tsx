import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState({ message: "Hello World!" });

  const handleClick = async () => {
    try {
      const url: string = "http://localhost:3000";
      setMessage(await (await fetch(url + "/")).json());
    } catch (err) {
      console.log("Error occured when connecting to server");
    }
  };
  return (
    <>
      <h1>{message.message}</h1>
      <button onClick={handleClick}>Fetch data from the server</button>
    </>
  );
}

export default App;
