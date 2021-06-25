import { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { fullMovieData } from "../../apiServices";
import Cast from "./Cast";
import Reviews from "./Reviews";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default class MovieDetailsPage extends Component {
  state = {
    id: "",
    title: "",
    vote_average: 0,
    genres: [],
    poster_path: "",
    overview: "",
    release_date: 0,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fullMovieData(movieId).then((data) => {
      this.setState({
        id: data.id,
        title: data.title,
        vote_average: data.vote_average,
        genres: data.genres,
        poster_path: data.poster_path,
        overview: data.overview,
      });
    });
  }
  render() {
    return (
      <div className="fullMovieDataContainer">
        <div className="MovieDataContainer">
          <img
            className="poster"
            src={IMAGE_URL + this.state.poster_path}
            alt=""
          />
          <div>
            <h2>{`${this.state.title} (${new Date(
              this.state.release_date
            ).getFullYear()}) `}</h2>
            <p>User score:{this.state.vote_average * 10}%</p>
            <h4>Overview</h4>
            <p>{this.state.overview}</p>
            <h4>Genres</h4>
            <p> {this.state.genres.map((genre) => genre.name).join(" ")}</p>
          </div>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={`/movies/${this.state.id}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${this.state.id}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/movies/:movieId/cast" component={Cast} />
            <Route exact path="/movies/:movieId/reviews" component={Reviews} />
          </Switch>
        </div>
      </div>
    );
  }
}
