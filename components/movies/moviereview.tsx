import styles from './movies.module.css';

const MovieReview = ({ review }: any) => {
    return (
        <div className={styles.reviewWrapper}>
            {review.review}
        </div>
    );
}

export default MovieReview;