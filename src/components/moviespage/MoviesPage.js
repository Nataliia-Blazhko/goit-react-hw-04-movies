import React, { Component } from "react";

export class MoviesPage extends Component {
  state = {
    query: "",
    page: 1,
  };

  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default MoviesPage;
