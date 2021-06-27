import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchMovies } from "../../apiServices";

export class MoviesPage extends Component {
  state = {
    query: "",
    page: 1,
    movies: [],
  };

  getMoviesList = async e => {
    e.preventDefault();
    const result = await searchMovies(this.state.query, this.state.page);
    // console.log(await result);
    this.setState({ movies: result.results });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getMoviesList}>
          <input
            value={this.state.query}
            onInput={e => this.setState({ query: e.target.value })}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
