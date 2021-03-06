import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchMovies } from "../../apiServices";

export class MoviesPage extends Component {
  state = {
    query: "",
    page: 1,
    movies: [],
  };

  queryInput = React.createRef();

  async componentDidMount() {
    const query = this.props.location.search;

    const searchParams = new URLSearchParams(query);

    if (searchParams.get("query")) {
      const result = await searchMovies(
        searchParams.get("query"),
        this.state.page
      );

      this.setState({ movies: result.results });

      this.queryInput.current.value =
        searchParams.has("query") && searchParams.get("query");
    }
  }

  getMoviesList = async (e) => {
    e.preventDefault();
    if (this.state.query) {
      const result = await searchMovies(this.state.query, this.state.page);
      this.setState({ movies: result.results });

      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${this.state.query}`,
      });
    } else {
      this.setState({ movies: [] });
    }
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.getMoviesList}>
          <input
            ref={this.queryInput}
            value={this.state.query}
            onInput={(e) => this.setState({ query: e.target.value })}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </form>
        {this.state.movies && (
          <ul className="MovieFindList">
            {this.state.movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default MoviesPage;
