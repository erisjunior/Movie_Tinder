import { useRouter } from 'next/router';
import { useContext } from 'react';

import { Context } from '../../context';

import styles from './index.module.css';

interface ILayoutProps {
  children: React.ReactNode;
}

const routes = ['/', '/likeds', '/not-likeds'];
const routesNames = ['Filmes não curados', 'Filmes Curtidos', 'Filmes não curtidos'];

export const Layout = ({ children }: ILayoutProps) => {
  const context = useContext(Context);
  const router = useRouter();

  const currentRoute = router.pathname;

  return (
    <div className={styles.container} style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${context.currentMovie?.poster_path}")` }}>
      <div className={styles.backgroundRed}>
        <div className={styles.buttonsContainer}>
          {routes.map((route, index) => (
            <button
              key={route}
              className={currentRoute === route ? styles.activeButton : undefined}
              onClick={() => router.push(route)}
            >
                {routesNames[index]}
            </button>
          ))}
        </div>
        {children}
      </div>
    </div>
  )
};