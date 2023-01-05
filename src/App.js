import React, { useState, useEffect } from "react";
import "./App.css";
import "./index";
import axios from "axios";
import PerfumeCard from "./components/PerfumeCard";

function App() {
  const [product, setProduct] = useState();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);
  const [error, setError] = useState("");

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const data = await axios("/data.json");
      console.log(data);
      setProduct(data.data);
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className="App">
      <PerfumeCard product={product} isDesktop={isDesktop}></PerfumeCard>
    </div>
  );
}

export default App;
