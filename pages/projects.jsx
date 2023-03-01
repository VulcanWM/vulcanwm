import Layout from '../components/layout';
import styles from '../styles/projects.module.css';
import ProjectCard from '../components/projectcard'
import {projects} from '../lists/projects'

export default function ProjectsPage() {
  return (
    <Layout pageTitle="Projects">
      <h2>My Projects</h2>
      <div className={styles.projects}>
        { 
          Object.keys(projects).map((project, index) => ( 
            <ProjectCard project={project}></ProjectCard>
          ))
        }
      </div> 
    </Layout>
  );
}