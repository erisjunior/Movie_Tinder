import { IMovie } from '../../context';

import styles from './index.module.css';

interface IMovieCardProps {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IMovieCardProps) => {
  return (
    <div className={styles.container}>
      <h1>{movie.title}</h1>
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>
      <span>{movie.vote_average} - {movie.vote_count}</span>
    </div>
  )
};