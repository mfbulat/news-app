import { useState } from "react";
import styles from "./Navbar.module.scss";
import burger from "../../assets/burger.svg";
import { Portal } from "../Portal";
import close from "../../assets/close.svg";

const MENU_ITEMS = [
  { id: 1, href: "#", label: "SCIENCE" },
  { id: 2, href: "#", label: "GENERAL" },
  { id: 3, href: "#", label: "ENTERTAINMENT" },
  { id: 4, href: "#", label: "TECHNOLOGY" },
  { id: 5, href: "#", label: "BUSINESS" },
  { id: 6, href: "#", label: "HEALTH" },
  { id: 7, href: "#", label: "SPORTS" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.burger}>
      <button onClick={toggleMenu}>
        <img src={burger} />
      </button>
      <Portal>
        <div className={`${styles.menuContainer} ${isOpen ? styles.open : ""}`}>
          <div className={styles.menu}>
            <button className={styles.close} onClick={toggleMenu}>
              <img src={close} />
            </button>
            <ul>
              {MENU_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={styles.menuItem}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Portal>
    </nav>
  );
};
