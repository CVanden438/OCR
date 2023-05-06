import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  colour?: 'blue' | 'red' | 'green';
}

const Button = ({ children, onClick, colour = 'blue' }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[colour]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
