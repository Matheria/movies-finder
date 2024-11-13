import cn from "classnames";
import styles from "./Paragraph.module.css";

const Paragraph = ({ size, text }) => {
	return <p className={cn(styles.text, { [styles.big]: size })}>{text}</p>;
};

export default Paragraph;
