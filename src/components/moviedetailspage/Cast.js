import { Component } from "react";
import { getCast } from "../../apiServices";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    getCast(movieId).then(data => {
      this.setState({
        cast: data.cast,
      });
    });
  }

  render() {
    return this.state.cast.map(movieActors => {
      return (
        <div key={movieActors.id}>
          {movieActors.profile_path && (
            <img
              alt={movieActors.name}
              src={IMAGE_URL + movieActors.profile_path}
            />
          )}

          <p>{movieActors.name}</p>
          <p>{movieActors.character}</p>
        </div>
      );
    });
  }
}
