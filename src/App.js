import React from "react";
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
import classes from "./App.module.css";
import Home from "./Containers/Home/Home";
import Contact from "./Containers/Contact/Contact";
import Media from "./Containers/Media/Media";
import About from "./Containers/About/About";
import Shows from "./Containers/Shows/Shows";

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
                <NavLink to="/" exact activeClassName={classes.active}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/Shows" activeClassName={classes.active}>
                  SHOWS
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/Media" activeClassName={classes.active}>
                  MEDIA
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" activeClassName={classes.active}>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="Contact" activeClassName={classes.active}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Media" component={Media} />
        <Route exact path="/Shows" component={Shows} />
      </div>
    </BrowserRouter>
  );
}

export default App;
