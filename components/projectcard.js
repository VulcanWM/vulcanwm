import styles from './projectcard.module.css';
import {projects} from '../lists/projects'

export default function ProjectCard({ project, children }) {
  return (
    <div>
      <a href={projects[project]['Link']} className={styles[projects[project]['Status']]} target="_blank">
        <div className={styles.project} onClick={"window.location.href='" + projects[project]['Link'] + "'"}>
          <h3>{project}</h3>
          {projects[project]['Status'] == "progress" ? (
            <>
              <p className={styles.red}>In progress</p>
            </>
          ) : (
            <>
              <p>{projects[project]['Desc']}</p>
            </>
          )}
          <div className={styles.tags}>
            {
              projects[project]['Tags'].map((tag, index) => ( 
                <p className={styles.tag}>{tag}</p>
              ))
            }
          </div>
        </div>
      </a>
    </div>
  );
}
