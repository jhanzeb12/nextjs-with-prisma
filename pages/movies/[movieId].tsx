import MovieCard from '../../components/movies/moviecard';
import MovieReview from '../../components/movies/moviereview';
import HttpService from '../../shared/services/httpService';
import styles from '../../components/movies/movies.module.css';

function MovieDetails({ movie }: any) {
  return (
    <div className={styles.movieDetails}>
        <MovieCard movie={movie} />
        <div className={styles.reviewsWrapper}>
            {movie?.Review?.map((rev: any) => (
                <MovieReview key={rev.id} review={rev} />
            ))}
        </div>
    </div>
  )
}

export default MovieDetails;

export async function getServerSideProps(context: any) {
  const httpService = new HttpService();
  
  const movieId = context.query.movieId;
  const movieWithReviews = await httpService.get(`/api/movies/${movieId}`);


  return {
    props: { movie: movieWithReviews }
  }
}
