import Heading from "./components/Heading/Heading.jsx";
import Paragraph from "./components/Paragraph/Paragraph.jsx";
import Button from "./components/Button/Button.jsx";
import "./App.css";

function App() {
	return (
		<>
			<Heading heading="Поиск" />
			<Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
			<Button text="Искать" />
		</>
	);
}

export default App;
