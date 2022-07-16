import { useRouter } from 'next/router';
import styles from './index.module.css';

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button onClick={() => router.push('/')}>Filmes não curados</button>
      <button onClick={() => router.push('/likeds')}>Filmes Curtidos</button>
      <button onClick={() => router.push('/not-likeds')}>Filmes não curtidos</button>
      {children}
    </div>
  )
};