import React, { Component } from "react";
import PictureTitle from "../../components/Picture/Picture";
import DTC9 from "../../assets/DickTheCitizen-9.jpg";
import classes from "./Home.module.css";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <img className={classes.HomePicture} src={DTC9} />
        <h1 className={classes.Title}>DICK THE CITIZEN</h1>
        <Footer />
      </div>
    );
  }
}

export default Home;
