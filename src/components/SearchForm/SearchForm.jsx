import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  const handleCLick = (e) => {
    e.preventDefault();
    console.log("Click!")
  };

	return (
    <form className={styles.form}>
      <Search placeholder="Введите название" />
      <Button text="Искать" handleCLick={handleCLick} />
    </form>
	);
};

export default SearchForm;
