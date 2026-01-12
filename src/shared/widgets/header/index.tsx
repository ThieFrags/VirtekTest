import styles from "./index.module.scss"
import {LogoIcon} from "@shared/assets/icons";
import MainContainer from "@shared/components/main-container";
import HeaderMenuItem from "@shared/components/header-menu-item";
import {ERouterPath} from "@shared";
import {useLocation} from "react-router";

const CatalogItems = [
  { label: 'компания', path: ERouterPath.HOME},
  { label: 'продукция', path: ERouterPath.SERVICES},
  { label: 'карьера', },
  { label: 'сотрудничество', },
  { label: 'связаться с нами', },
]

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <MainContainer className={styles.header_container}>
        <LogoIcon className={styles.logo}/>
      </MainContainer>
      <nav className={styles.header__nav}>
        <ul className={styles.items_list}>
          {CatalogItems.map((item) => (
            <HeaderMenuItem
              key={item.label}
              children={item.label}
              href={item.path}
              active={location.pathname === item.path}
            />
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;