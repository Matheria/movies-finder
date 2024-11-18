import styles from "./MovieItem.module.css"

const MoviesItem = ({ rating, poster, title, isFavorite}) => {
  return (
    <li className={styles["movie-item"]}>
        <img className={styles["movie-poster"]} src={poster} />
        <div className={styles["movie-rating"]}>
          <img src="/star.svg" alt="star" />
          <span>{rating}</span>
        </div>
        <h3 className={styles["movie-title"]}>{title}</h3>
        <button className={styles["movie-favorite"]}>
          <img src="/like.svg" alt="favorite" />
          <p className={styles["movie-text"]}>В избранное</p>
        </button>
    </li>
  )
};

export default MoviesItem;