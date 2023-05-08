import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  colour?: 'red' | 'green';
}

const Button = ({ children, onClick, colour, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${colour && styles[colour]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
