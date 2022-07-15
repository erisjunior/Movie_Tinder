import { createContext, useState } from "react";

export interface IMovie {}

export interface IContext {
  movies: IMovie[];
  likedMovies: IMovie[];
  notLikedMovies: IMovie[];
}

interface IProviderProps {
  children: React.ReactNode;
}

export const Context = createContext<IContext>({
  movies: [],
  likedMovies: [],
  notLikedMovies: [],
});

export const Provider = ({ children }: IProviderProps) => {
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [notLikedMovies, setNotLikedMovies] = useState([]);

  return (
    <Context.Provider value={{ movies, likedMovies, notLikedMovies }}>
      {children}
    </Context.Provider>
  )
};