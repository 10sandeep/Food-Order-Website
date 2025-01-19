import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-div">
        <img
          className="logo"
          src="https://imgs.search.brave.com/m7TfpKKTc2VWwR7Y123TvVAtPXpchlZzrcfvkbdXOag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMDExMDU5MjMv/MV9iaWc4LTc2OHg1/OTEucG5n"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restrocard = () => {
  return (
    <div className="restro-card">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <h3>Meghna Foods</h3>
      <p>Chicken Biriyani,Chilli Chicken,Mutton Biriyani,Tandoori Chicken</p>
      <div className="rating">
      <h4>4.4</h4>
      
      <h4>38 minutes</h4>
      
      <h4>400 OFF FOR TWO</h4>
      </div>
       <button className="restro-btn">More Details</button>
      


   
      
    </div>

 
    
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-container">
        <Restrocard />
        <Restrocard />
        <Restrocard />
        <Restrocard />
        <Restrocard />
        <Restrocard />
        <Restrocard />
        <Restrocard />
        <Restrocard />
        <Restrocard />
        <Restrocard />
        <Restrocard />
        
      </div>
    </div>
    
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
