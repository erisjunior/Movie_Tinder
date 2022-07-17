import axios from 'axios';
import { GetStaticProps } from 'next';
import { useContext, useEffect } from 'react';

import { MovieCard } from '../components/movie-card';
import { Context, IMovie } from '../context';

import styles from './index.module.css';

interface IHomeProps {
  movies: IMovie[];
}

const Home = ({ movies }: IHomeProps) => {
  const context = useContext(Context);

  useEffect(() => {
    if (context.movies.length === 0) {
      context.setMovies(movies);
    }
  }, []);

  useEffect(() => {
    if (context.movies.length) {
      context.setCurrentMovie(context.movies[0]);
    } else {
      context.setCurrentMovie(null);
    }

    return () => {
      context.setCurrentMovie(null);
    }
  }, [context])

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
          <MovieCard movie={context.movies[0]} />
          <button onClick={handleLike}>Curtir</button>
          <button onClick={handleSkip}>Pular</button>
          <button onClick={handleNotLike}>Não Curtir</button>
        </div>
      )}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let movies: IMovie[] = [];

  for (let index = 0; index < 2; index++) {
    const request = await axios.post(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=pt-BR&page=${index+1}`);
    movies = [...movies, ...request.data.results];
  }

  return { props: { movies }, revalidate: 1000 }
}

export default Home
