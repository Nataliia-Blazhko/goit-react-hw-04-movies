import { Component } from "react";
import { fullMovieData } from "../../apiServices";

export default class MovieDetailsPage extends Component {
  state = {
    id: "",
  };

  componentDidMount() {
    // console.log(this.props.match.params);
    const { movieId } = this.props.match.params;
    fullMovieData(movieId).then((data) => {
      this.setState({ id: data.id });
    });
  }
  render() {
    return <div></div>;
  }
}
