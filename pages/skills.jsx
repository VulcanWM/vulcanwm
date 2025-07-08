import Layout from '../components/layout';
import styles from '../styles/skills.module.css';
import {skills} from '../lists/skills'

export default function SkillsPage() {
  return (
    <Layout pageTitle="Skills">
      <div id="skills_content">
        <h2>My Skills</h2>
        <p>A list of tools I’ve used, with the ones I use most often listed first.</p>
        <div className={styles.lists}>
          { 
            Object.keys(skills).map((skill_type, index) => (
              <div className={styles.skillinfo}>
              <h3>{skill_type}</h3>
                <div className={styles.skills}>
                  {
                    skills[skill_type].map((skill_name, index) => ( 
                      <p className={styles.skill}>{skill_name}</p>
                    ))
                  } 
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  );
}
