import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Comp from './Component'






function App() {
  const [nasaData, setNasaData] = useState('')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=rMHdY4dWRryg959vhzFMDvr4A1ItfBVyOOprbtxm')
    .then(res => {
      setNasaData(res.data)
    })
    .catch(error => {
      console.log(error)
    }, [])

  })
  return (
    <div className="App">
      <Comp keyIndex={nasaData} />
    </div>
  );
}

export default App;
