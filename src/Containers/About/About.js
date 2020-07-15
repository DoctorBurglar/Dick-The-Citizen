import React, { Component } from "react";
import SongList from "../../components/SongList/SongList";
import classes from "./About.module.css";
import Picture from "../../components/Picture/Picture";
import DTC10 from "../../assets/DickTheCitizen-10.jpg";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import BandMembers from "../../components/BandMembers/BandMembers";

class About extends Component {
  render() {
    return (
      <>
        <Picture src={DTC10} />
        <div className={classes.About}>
          <Title title="About" />
          <div className={classes.Content}>
            <SongList />
            <BandMembers />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default About;
