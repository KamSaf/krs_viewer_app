import "./App.css";
import axios from "axios";
import { Axios } from "axios";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState({ message: "Hello World!" });

  const handleClick = async () => {
    try {
      const axiosInstance: Axios = axios.create({
        baseURL: "http://localhost:3000",
      });
      await axiosInstance.get("/").then((response) => {
        setMessage(response.data);
      });
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
