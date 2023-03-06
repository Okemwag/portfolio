import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <form
      className={styles.wrapper}
      target="_blank"
      action="https://formsubmit.co/gabrielokemwa83@gmail.com"
      method="POST"
    >
      <div className={styles.inputs}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Gabriel Okemwa"
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="gabrielokemwa83@gmail.com"
          required
        />
      </div>
      <div className={styles.textareas}>
        <textarea
          className={styles.textarea}
          type="text"
          name="message"
          placeholder="Your message"
          required
        />
        <button className={styles.send} type="submit">
          <img className={styles.icon} src="/assets/actions/send.png" alt="" />
        </button>
      </div>
    </form>
  );
};