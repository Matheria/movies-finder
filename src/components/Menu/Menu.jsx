import styles from "./Menu.module.css";

const Menu = () => {
	return (
		<nav className={styles.menu}>
			<ul className={styles["menu-list"]}>
				<li className={styles["menu-item"]}>
					<a className={styles["menu-link"]} href="/">Поиск фильмов</a>
				</li>
				<li className={styles["menu-item"]}>
					<a className={styles["menu-link"]} href="/">Мои фильмы</a>
				</li>
				<li className={styles["menu-item"]}>
					<a className={styles["menu-link"]} href="/">Войти</a>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
