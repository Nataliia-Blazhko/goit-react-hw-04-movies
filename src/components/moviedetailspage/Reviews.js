import { Component } from "react";
import { getReview } from "../../apiServices";
export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    getReview(movieId).then((data) => {
      this.setState({
        reviews: data.results,
      });
    });
  }
  render() {
    return this.state.reviews.length ? (
      <div className="reviewsContainer">
        <ul>
          {this.state.reviews.map((review) => (
            <li key={review.id}>
              <h5 className="reviewAuthor">{review.author}</h5>
              <p className="text">{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p className="notification">We don't have any reviews for this movie.</p>
    );
  }
}
