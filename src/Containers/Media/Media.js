import React, { Component } from "react";
import DTC3 from "../../assets/DickTheCitizen-3.jpg";
import Picture from "../../components/Picture/Picture";
import Footer from "../../components/Footer/Footer";
import classes from "./Media.module.css";
import Title from "../../components/Title/Title";

class Media extends Component {
  render() {
    return (
      <>
        <Picture
          src={DTC3}
          alt="Dick the Citizen smiles at camera while lead singer Steve Pederson pulls down sunglasses to try and look cool"
        />
        <div className={classes.Media}>
          <Title title="Media" />
          <div className={classes.Content}>Media Content</div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Media;
