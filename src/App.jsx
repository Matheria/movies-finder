import Header from "./layouts/Header/Header.jsx";
import Body from "./layouts/Body/Body.jsx";
import Heading from "./components/Heading/Heading.jsx";
import Paragraph from "./components/Paragraph/Paragraph.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";
import MoviesList from "./components/MoviesList/MoviesList.jsx";
import "./App.css";

function App() {
	return (
		<>
			<Header />
      <Body />
			{/* <Heading heading="Поиск" />
			<Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      <SearchForm />
      <MoviesList /> */}
		</>
	);
}

export default App;
