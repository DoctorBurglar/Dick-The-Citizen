import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import classes from "./App.module.css";
import Home from "./Containers/Home/Home";
import Contact from "./Containers/Contact/Contact";
import Media from "./Containers/Media/Media";
import About from "./Containers/About/About";
import UpcomingShows from "./Containers/UpcomingShows/UpcomingShows";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <header className={classes.Header}>
          <div className={classes.Logo}>
            <Link style={{ textDecoration: "none" }} to="/">
              DICK THE CITIZEN
            </Link>
          </div>
          <nav>
            <ul className={classes.NavBar}>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  className={classes.NavLink}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/UpcomingShows"
                  className={classes.NavLink}
                >
                  UPCOMING SHOWS
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  style={{ textDecoration: "none" }}
                  to="/Media"
                  className={classes.NavLink}
                >
                  MEDIA
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/About"
                  className={classes.NavLink}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="Contact"
                  className={classes.NavLink}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Media" component={Media} />
        <Route exact path="/UpcomingShows" component={UpcomingShows} />
      </div>
    </BrowserRouter>
  );
}

export default App;
