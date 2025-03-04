import React from "react";
import newsApiLogo from "../../assets/newsApi.png";
import styles from "./Footer.module.scss";
import typography from "../../styles/typography.module.scss";

export const Footer: React.FC = () => {
  const FOOTER_ITEMS = [
    { id: 1, href: "#", label: "Log In" },
    { id: 2, href: "#", label: "About Us" },
    { id: 3, href: "#", label: "Publishers" },
    { id: 4, href: "#", label: "Sitemap" },
  ];

  return (
    <footer className={styles.footerContainer}>
      <nav>
        <ul className={styles.navigation}>
          {FOOTER_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={item.href} className={typography.caption1}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.poweredBy}>
        <span className={typography.caption1}>Powered by</span>
        <img className={styles.poweredByLogo} src={newsApiLogo} />
      </div>

      <p className={typography.caption1}>
        © 2023 Besider. Inspired by Insider
      </p>
    </footer>
  );
};
