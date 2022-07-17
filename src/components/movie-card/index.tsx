import Image from 'next/image';
import { useMemo } from 'react';
import { IMovie } from '../../context';

import styles from './index.module.css';

interface IMovieCardProps {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IMovieCardProps) => {
  const votes = useMemo(() =>  {
    const votesAvarage = Math.floor(movie.vote_average / 2);

    const votes = [];
    for (let index = 0; index < 5; index++) {
      if (index < votesAvarage) {
        votes.push(true);
      } else {
        votes.push(false);
      }
    }

    return votes;
  }, [movie.vote_average]);

  return (
    <div className={styles.container} style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie.poster_path}")`}}>
      <div>
        <div className={styles.row}>
          <h1>{movie.title}</h1>
          <div>
            <div>
              {votes.map((vote, index) => (
                <div key={index} className={styles.vote}>
                  <Image key={index} src={vote ? '/vote.png' : '/not-vote.png'} alt="Voto" width={15} height={13} />
                </div>
              ))}
            </div>
            <span>({movie.vote_count} Avaliações)</span>
          </div>
        </div>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
};