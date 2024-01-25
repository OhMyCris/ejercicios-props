import Rating from "./Rating";

const Review = ({review}) => {
    return <div>
        <img src={review.avatar} alt="Avatar"/>
        <h3>{review.title}</h3>
        <p>{review.description}</p>
        <p>{review.date}</p>
        <Rating rating={review.rating}></Rating>
    </div>
}

export default Review;