import Review from "./Review";

const Reviews = ({reviews}) => {
    return <div>
        {reviews.map((review, index) => (
            <Review key={index} review={review.review}></Review>
        ))}
        
    </div>
}

export default Reviews;