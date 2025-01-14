import React from 'react';

import styles from "./button.module.css";

interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;