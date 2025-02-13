import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import BigCard from "./Cards/BigCard";
import Card from "./Cards/Card";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-8">
            <BigCard />
            <Card />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
