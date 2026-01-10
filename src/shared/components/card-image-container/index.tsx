import {ComponentPropsWithoutRef, FC} from "react";
import styles from "./index.module.scss"

interface ICardImageContainer extends ComponentPropsWithoutRef<"div"> {
  src: string;
  link: string;
  alt: string;
}

const CardImageContainer: FC<ICardImageContainer> = ({src, link, alt, ...props}) => {
  return (
    <div className={styles.cardImageContainer} {...props}>
      <a href={link} target="_blank">
        <img src={src} alt={alt}/>
      </a>
    </div>
  );
};

export default CardImageContainer;