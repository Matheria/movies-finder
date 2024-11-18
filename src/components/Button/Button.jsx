import styles from './Button.module.css';

const Button = ({ text, handleCLick }) => {
  return <button className={styles.button} onClick={handleCLick}>{text}</button>;
}

export default Button;