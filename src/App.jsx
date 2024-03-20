import React, { useState } from "react"
import Nav from "./components/Nav"
import CardComponent from "./components/CardComponent.jsx"
import hotelData from "../src/hotelData.json"
import "../src/Css/style.css"
import { useEffect } from "react"
const App = () => {
  const [data,setData]=useState([])
  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((responsive) => {
        //console.log(responsive)
        return responsive.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      });
  }, []);

  return (
    <div>

      <Nav />

      {data.map((hotelData, index) => (
        <CardComponent key={index} data={hotelData}   allData={data} />
      ))}



    </div>
  )
}

export default App
