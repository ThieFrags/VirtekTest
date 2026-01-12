import styles from "./index.module.scss"
import {BurgerMenuIcon, LogoIcon} from "@shared/assets/icons";
import {MainContainer, HeaderMenuItem} from "@shared/components";
import {ERouterPath} from "@shared";
import {useLocation} from "react-router";
import {useEffect, useState} from "react";

const CatalogItems = [
  { label: 'компания', path: ERouterPath.HOME},
  { label: 'продукция', path: ERouterPath.SERVICES},
  { label: 'карьера', },
  { label: 'сотрудничество', },
  { label: 'связаться с нами', },
]

const Header = () => {
  const location = useLocation();
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 930) {
        setIsActiveMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const toggleActiveMenu = () => {
    setIsActiveMenu(v => !v)
  }

  return (
    <header className={styles.header}>
      <MainContainer className={styles.header_container}>
        <LogoIcon className={styles.logo}/>
        <button className={styles.burger} onClick={toggleActiveMenu}>
          <BurgerMenuIcon />
        </button>
      </MainContainer>
      <nav className={`${styles.header__nav} ${
        isActiveMenu ? styles.header__nav_active : styles.header__nav_no_active
      }`}>
        <ul className={styles.items_list}>
          {CatalogItems.map((item) => (
            <HeaderMenuItem
              key={item.label}
              onClick={() => setIsActiveMenu(false)}
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

export {
  Header
};