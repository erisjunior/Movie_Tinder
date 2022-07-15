import axios from 'axios';
import { useContext, useEffect } from 'react';

import { Context, IMovie } from '../context';

import styles from './index.module.css';

interface HomeProps {
  movies: IMovie[];
}

const Home = ({ movies }: HomeProps) => {
  const context = useContext(Context);

  useEffect(() => {
    context.setMovies(movies);
  }, []);

  const handleSkip = () => {
    if (!context.movies.length) return;

    const newMovies = [...context.movies];
    newMovies.shift();
    context.setMovies(newMovies);
  }

  const handleLike = () => {
    if (!context.movies.length) return;

    const newLikedMovies = [...context.likedMovies, context.movies[0]];

    context.setLikedMovies(newLikedMovies);
    handleSkip();
  }

  const handleNotLike = () => {
    if (!context.movies.length) return;

    const newNotLikedMovies = [...context.notLikedMovies, context.movies[0]];

    context.setNotLikedMovies(newNotLikedMovies);
    handleSkip();
  }

  return (
    <main className={styles.container}>
      {context.movies.length && (
        <div>
          <p>{context.movies[0].overview}</p>
          <button onClick={handleLike}>Curtir</button>
          <button onClick={handleSkip}>Pular</button>
          <button onClick={handleNotLike}>Não Curtir</button>
        </div>
      )}
    </main>
  )
}

export const getStaticProps = async () => {
  let movies: IMovie[] = [];

  for (let index = 0; index < 5; index++) {
    const request = await axios.post(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=pt-BR&page=${index+1}`);
    movies = [...movies, ...request.data.results];
  }

  return { props: { movies } }
}

export default Home
