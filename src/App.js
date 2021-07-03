// import HomePage from "./components/homepage/HomePage";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import MoviesPage from "./components/moviespage/MoviesPage";
import "./styles.scss";
// import MovieDetailsPage from "./components/moviedetailspage/MovieDetailsPage";
import React, { Suspense } from "react";
const HomePage = React.lazy(() => import("./components/homepage/HomePage"));
const MoviesPage = React.lazy(() =>
  import("./components/moviespage/MoviesPage")
);
const MovieDetailsPage = React.lazy(() =>
  import("./components/moviedetailspage/MovieDetailsPage")
);

function App() {
  return (
    <div className="App">
      <Router>
        <ul className="NavLinks">
          <li className="NavLinksItem">
            <NavLink
              exact
              to="/"
              className="link"
              activeClassName="active-link"
            >
              Home
            </NavLink>
          </li>
          <li className="NavLinksItem">
            <NavLink
              exact
              to="/movies"
              className="link"
              activeClassName="active-link"
            >
              Movies
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies" component={MoviesPage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
