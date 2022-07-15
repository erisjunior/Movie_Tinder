import { createContext, useState } from "react";

export interface IMovie {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface IContext {
  movies: IMovie[];
  setMovies: (movies: IMovie[]) => void;
  likedMovies: IMovie[];
  setLikedMovies: (movies: IMovie[]) => void;
  notLikedMovies: IMovie[];
  setNotLikedMovies: (movies: IMovie[]) => void;
}

interface IProviderProps {
  children: React.ReactNode;
}

export const Context = createContext<IContext>({
  movies: [],
  setMovies: () => {},
  likedMovies: [],
  setLikedMovies: () => {},
  notLikedMovies: [],
  setNotLikedMovies: () => {}
});

export const Provider = ({ children }: IProviderProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [likedMovies, setLikedMovies] = useState<IMovie[]>([]);
  const [notLikedMovies, setNotLikedMovies] = useState<IMovie[]>([]);

  return (
    <Context.Provider value={{ movies, setMovies, likedMovies, setLikedMovies, notLikedMovies, setNotLikedMovies }}>
      {children}
    </Context.Provider>
  )
};