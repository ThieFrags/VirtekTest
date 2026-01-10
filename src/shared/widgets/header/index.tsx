import styles from "./index.module.scss"
import {LogoIcon} from "@shared/assets/icons";
import MainContainer from "@shared/components/main-container";
import HeaderMenuItem from "@shared/components/header-menu-item";

const CatalogItems = ['компания', 'услуги', 'карьера', 'сотрудничество', 'связаться с нами']

const Header = () => {
  return (
    <header className={styles.header}>
      <MainContainer className={styles.header_container}>
        <LogoIcon className={styles.logo}/>
      </MainContainer>
      <nav className={styles.header__nav}>
        <ul className={styles.items_list}>
          {CatalogItems.map((item) => (
            <HeaderMenuItem key={item} children={item}/>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;