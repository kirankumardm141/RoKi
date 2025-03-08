import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
      fetch("http://localhost:8080/api/hello-world") // Backend URL
          .then(response => response.text()) // Convert response to text
          .then(data => setMessage(data)) // Set state with response
          .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
      <div>
          <h1>Message from Backend:</h1>
          <p>{message}</p>
      </div>
  );
}

export default App;
