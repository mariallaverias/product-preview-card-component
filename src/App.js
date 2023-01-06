import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PerfumeCard from "./components/PerfumeCard";

function App() {
  const [product, setProduct] = useState();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);
  const [error, setError] = useState("");

  //credit of code snippet for viewport size: https://thewebdev.info/2021/11/20/how-to-conditionally-render-items-based-on-viewport-size-in-react/

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
