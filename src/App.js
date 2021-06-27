import HomePage from "./components/homepage/HomePage";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MoviesPage from "./components/moviespage/MoviesPage";
import "./styles.scss";
import MovieDetailsPage from "./components/moviedetailspage/MovieDetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <ul className="NavLinks">
          <li className="NavLinksItem">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="NavLinksItem">
            <NavLink exact to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
