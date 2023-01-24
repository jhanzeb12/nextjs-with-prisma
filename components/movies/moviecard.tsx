import Link from 'next/link';
import styles from './movies.module.css';

const MovieCard = ({ movie }: any) => {
    return (
        <div className={styles.movieCard}>
            <Link href={`/movies/${movie.id}`} legacyBehavior>
                <div className={styles.movieCardTitle}>{movie.title}</div>
            </Link>
        </div>
    );
}

export default MovieCard;