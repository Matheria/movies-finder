import Menu from "../../components/Menu/Menu";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<a href="/">
				<img src="/logo.svg" alt="logo" />
			</a>
			<Menu />
		</header>
	);
};

export default Header;
