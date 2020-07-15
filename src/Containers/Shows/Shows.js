import React, { Component } from "react";
import DTC7 from "../../assets/DickTheCitizen-7.jpg";
import Picture from "../../components/Picture/Picture";
import Footer from "../../components/Footer/Footer";
import classes from "./Shows.module.css";
import Title from "../../components/Title/Title";
import axios from "axios";
import Event from "../../components/Event/Event";
import { compareAsc } from "date-fns";

class Shows extends Component {
  state = {
    eventData: [],
    venue: "",
    city: "",
    datetime: "",
    description: "",
  };

  componentDidMount() {
    axios
      .get(
        "https://rest.bandsintown.com/artists/Dick%20The%20Citizen/events?app_id=5a8f511d16953501bbc9d9cdacb5ea19&date=%22upcoming%22"
      )
      .then((response) => {
        let eventArr = response.data.filter(
          (event) =>
            compareAsc(
              new Date(event.datetime),
              // For future shows only, set line below to just "new Date()"
              new Date(response.data[115].datetime)
            ) === 1
        );

        this.setState({
          eventData: eventArr,
        });
      });
  }

  render() {
    let events = this.state.eventData.map((event) => {
      return <Event event={event} key={event.id} />;
    });

    return (
      <>
        <Picture
          src={DTC7}
          alt="Dick The Citizen gazes at lead singer Steve Pederson"
        />
        <div className={classes.UpcomingShows}>
          <Title title="Shows" />
          <div className={classes.Content}>
            <hr className={classes.Line} />
            <h3 className={classes.TourDates}>{events}</h3>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Shows;
