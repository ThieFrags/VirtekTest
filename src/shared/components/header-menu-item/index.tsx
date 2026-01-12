import styles from "./index.module.scss";
import {ComponentPropsWithRef, FC} from "react";
import clsx from "clsx";
import {Link} from "react-router";

interface Props extends ComponentPropsWithRef<'li'>{
  children: string;
  active?: boolean;
  className?: string;
  href?: string;
}

const HeaderMenuItem: FC<Props> = ({
   children,
   active = false,
   className = "",
   href = "#",
   ...props
  }) => {
  return (
    <li
      className={clsx(
        styles.header__nav_item,
        active && styles['header__nav_item--active'],
        className
      )}
      {...props}
    >
      <Link to={href} className={styles.link}>{children}</Link>
    </li>
  );
};

export {
  HeaderMenuItem
};
