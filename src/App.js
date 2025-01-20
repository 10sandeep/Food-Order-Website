import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import tastyTrailsLogo from "../../public/images/tasty-trails-logo.png";
// import { MdStarRate } from "react-icons/md";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
