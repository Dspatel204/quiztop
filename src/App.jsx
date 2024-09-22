import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Hero from "./Hero";
import DatingCard from "./DatingCard";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <style>{`body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
`}</style>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dating"
          element={
            <div className="App">
              <Header />
              <Hero />
              <DatingCard />
              <DatingCard />
              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
