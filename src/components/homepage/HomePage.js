import { Component } from "react";
import { trending } from "../../apiServices";
import { Link } from "react-router-dom";

export class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    trending().then(data => {
      this.setState({ movies: data.results });
    });
  }

  render() {
    return (
      <div>
        <h2>Trending today</h2>
        <ul className="MovieList">
          {this.state.movies.map(movie => {
            return (
              <li key={movie.id} className="MovieListItem">
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default HomePage;
