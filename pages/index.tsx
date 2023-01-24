import HttpService from '../shared/services/httpService';
import styles from '../app/page.module.css'
import movieStyles from '../components/movies/movies.module.css';
import MovieCard from '../components/movies/moviecard';

function Home({ movies }: any) {
  return (
    <main className={styles.main}>
        <div className={movieStyles.moviesWrapper}>
            {movies?.map((movie: any) => {
                return (<MovieCard key={movie.id} movie={movie} />)           
             })}
      </div>
    </main>
  )
}

export default Home;

export async function getServerSideProps(context: any) {
  const httpService = new HttpService();
  const movies = await httpService.get('/api/movies')

  return {
    props: { movies }
  }
}
