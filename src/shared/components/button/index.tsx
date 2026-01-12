import styles from "./index.module.scss"
import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import clsx from "clsx";

export type IButtonColor = "primary" | "secondary"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: IButtonColor;
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({
    color="primary",
    children,
    className= "",
    ...props
  }) => {
  return (
    <button
    className={clsx(styles.button, styles[`button__${color}`],className)}
    {...props}
    >
    <span className={styles.content}>{children}</span>
    </button>
  );
};

export default Button;