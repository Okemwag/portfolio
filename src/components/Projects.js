import styles from "./Projects.module.css";

import { projects } from "../content/projects";

export const Projects = () => {
  return (
    <section className={styles.wrapper}>
      {projects.map((project, index) => {
        return (
          <div className={styles.card} key={index}>
            <div className={styles.info}>
              <img className={styles.image} src={project.image} alt="cover" />
            </div>

            <div className={styles.info}>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};