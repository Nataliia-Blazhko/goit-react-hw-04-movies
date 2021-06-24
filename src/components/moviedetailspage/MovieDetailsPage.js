import { Component } from "react";
import { fullMovieData } from "../../apiServices";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default class MovieDetailsPage extends Component {
  state = {
    id: "",
    title: "",
    vote_average: 0,
    genres: [],
    poster_path: "",
    overview: "",
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
        <div className="imageContainer">
          <img
            className="poster"
            src={IMAGE_URL + this.state.poster_path}
            alt=""
          />
        </div>
        <div className="MovieDataContainer">
          <h2>{this.state.title}</h2>
          <p>User score:{this.state.vote_average * 10}%</p>
          <h4>Overview</h4>
          <p>{this.state.overview}</p>
          <h4>Genres</h4>
          <p> {this.state.genres.map((genre) => genre.name).join(" ")}</p>
        </div>
      </div>
    );
  }
}
