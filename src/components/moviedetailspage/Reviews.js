import { Component } from "react";
import { getReview } from "../../apiServices";
export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    getReview(movieId).then(data => {
      this.setState({
        reviews: data.results,
      });
    });
  }
  render() {
    return this.state.reviews.length ? (
      <div>
        <ul>
          {this.state.reviews.map(review => (
            <li key={review.id}>
              <h5>{review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>We don't have any reviews for this movie.</p>
    );
  }
}
