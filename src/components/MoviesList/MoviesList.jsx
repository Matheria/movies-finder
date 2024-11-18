import MoviesItem from "../MovieItem/MovieItem";
import styles from "./MoviesList.module.css";
import movies from "../../data.js";

const MoviesList = () => {
  return (
    <ul className={styles["movies-list"]}>
      {movies.map(({ id, rating, poster, title, isFavorite }) => <MoviesItem key={id} rating={rating} poster={poster} title={title} isFavorite={isFavorite} />)}
    </ul>
  );
};

export default MoviesList;