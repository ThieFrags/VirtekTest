import {ElementType, FC, HTMLAttributes} from "react";
import clsx from "clsx";
import styles from "./index.module.scss"

interface IMainContainerProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType
}

const MainContainer: FC<IMainContainerProps> = ({className, tag: Tag = 'div', ...props}) => {
  return(
    <Tag className={clsx(styles.container, className)} {...props} />
  )
}

export {
  MainContainer
};