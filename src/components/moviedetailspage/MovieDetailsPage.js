import React, { Component, Suspense } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { fullMovieData } from "../../apiServices";
const Cast = React.lazy(() => import("./Cast"));
const Reviews = React.lazy(() => import("./Reviews"));
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
    fullMovieData(movieId).then(data => {
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

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="fullMovieDataContainer">
        <button onClick={this.props.history.goBack}> &#129044; Go Back</button>
        <div className="MoviePosterContainer">
          {this.state.poster_path && (
            <img
              className="poster"
              src={IMAGE_URL + this.state.poster_path}
              alt=""
            />
          )}

          <div className="MovieDataContainer">
            <h2 className="movieTitle">{this.state.title}</h2>
            <p className="text">User score:{this.state.vote_average * 10}%</p>
            <h4 className="subtitle">Overview</h4>
            <p className="text">{this.state.overview}</p>
            <h4 className="subtitle">Genres</h4>
            <p className="text">
              {" "}
              {this.state.genres.map(genre => genre.name).join(" ")}
            </p>
          </div>
        </div>
        <div>
          <hr />
          <p className="additionalInformation">Additional information</p>
          <ul className="addInfoList">
            <li>
              <Link to={`/movies/${this.state.id}/cast`} replace>
                Cast
              </Link>
            </li>
            <li>
              <Link to={`/movies/${this.state.id}/reviews`} replace>
                Reviews
              </Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<div>Завантаження...</div>}>
            <Switch>
              <Route exact path="/movies/:movieId/cast" component={Cast} />
              <Route
                exact
                path="/movies/:movieId/reviews"
                component={Reviews}
              />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}
