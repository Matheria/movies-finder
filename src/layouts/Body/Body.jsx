import Heading from "../../components/Heading/Heading.jsx";
import Paragraph from "../../components/Paragraph/Paragraph.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import styles from "./Body.module.css";

const Body = () => {
  return (
    <main className={styles.main}>
      <section className={styles.search}>
        <Heading heading="Поиск" />
        <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
        <SearchForm />
      </section>
      <MoviesList />
    </main>
  );
}

export default Body;