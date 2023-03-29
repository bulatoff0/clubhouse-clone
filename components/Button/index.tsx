import clsx from "clsx";
import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children?: string;
  disabled?: boolean;
  color?: keyof typeof colors;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const colors = {
  green: styles.buttonGreen,
  gray: styles.buttonGray,
  blue: styles.buttonBlue,
};

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  color,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(className, styles.button, colors[color])}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
