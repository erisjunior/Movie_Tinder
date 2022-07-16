import { useContext } from 'react';

import { MovieCard } from '../components/movie-card';
import { Context } from '../context';

import styles from './index.module.css';

const Likeds = () => {
  const context = useContext(Context);

  return (
    <main className={styles.container}>
      {context.notLikedMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  )
}

export default Likeds
