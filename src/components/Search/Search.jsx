import styles from "./Search.module.css";

const Search = ({ placeholder }) => {
	return (
    <div className={styles["search-wrapper"]}>
        <img className={styles["search-icon"]} src="/search.svg" alt="search" />
        <input className={styles.search} type="text" placeholder={placeholder} />
    </div>
  );
};

export default Search;
