import { useState, useEffect } from "react";

import styles from "./Header.module.css";

import { navbar } from "../content/navbar";

export const Header = () => {
  const [mobileNavigation, setMobileNavigation] = useState(false);
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 700;

  return (
    <header className={styles.wrapper}>
      <div className={styles.brand}>
        <img className={styles.icon} src="/assets/profile.png" alt="profile" />
        <h1 className={styles.logo}>Portfolio</h1>
      </div>
      {!mobileNavigation && isMobile ? (
        <img
          className={styles.toggle}
          onClick={() => {
            setMobileNavigation(true);
            document.body.style.overflow = "hidden";
          }}
          src="/assets/actions/hamburger.png"
          alt="menu"
        />
      ) : (
        <div className={styles.navigation}>
          {navbar.map((item, index) => {
            return (
              <p
                key={index}
                className={styles.item}
                onClick={() => {
                  document
                    .getElementById(item.title.toLowerCase())
                    .scrollIntoView({ behavior: "smooth" });
                  setMobileNavigation(false);
                  document.body.style.overflow = "auto";
                }}
              >
                {item.title}
              </p>
            );
          })}
        </div>
      )}
    </header>
  );
};