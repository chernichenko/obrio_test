import React from 'react';

import styles from "./button.module.css";

interface IButtonProps {
  variant?: 'primary' | 'white';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  variant = 'primary',
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${styles.btn} ${className} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;