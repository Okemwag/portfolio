import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>Gabriel Okemwa</h1>
      <p>206-20116,   Gilgil</p>
      <p>+254 797306927 | gabrielokemwa83@gmail.com</p>
      <div className={styles.socials}>
        <img
          src="/assets/socials/twitter.png"
          alt="social-icon"
          className={styles.icon}
        />
        <img
          src="/assets/socials/linkedin.png"
          alt="social-icon"
          className={styles.icon}
        />
        <img
          src="/assets/socials/github.png"
          alt="https://github.com/Okemwag"
          className={styles.icon}
        />
      </div>
    </footer>
  );
};