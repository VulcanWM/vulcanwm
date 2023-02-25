import Layout from '../components/layout';
import styles from '../styles/skills.module.css';


// add tooling
// max 8 with this styling
const skills = {"Languages": ['Python', 'JavaScript', 'JSX', 'Swift'], "Web Frameworks": ['Flask', 'React.js', 'AFrame'], "Full Stack Frameworks": ["Next.js"], "Databases": ["MongoDB", "Key Value Databases"], "Types of APIs": ['REST', "GraphQL"], "APIs": ['Spotify API', 'Gmail API'], "Tooling": ["Git", "GitHub", "pip", "Vercel", "Heroku"], "Data Format": ['Form Data', 'JSON', "XML", "CSV"], "Markup": ["HTML", "Markdown"], "Styling": ['CSS', "Styled-JSX"], "Analytics": ['Google Analytics', "Vercel Audiences"]}

export default function SkillsPage() {
  return (
    <Layout pageTitle="Skills">
      <div id="skills_content">
        <h2>Skills</h2>
        <p>This is a list of what tools I have used while I have been programming.</p>
        <div id="skills">
          { 
            Object.keys(skills).map((skill_type, index) => (
              <div id={skill_type} className={styles.lists}>
                <div className={styles.alllist}>
                <h3>{skill_type}</h3>
                  <ul className={styles.list}>
                    {
                      skills[skill_type].map((skill_name, index) => ( 
                        <li>{skill_name}</li>
                      ))
                    } 
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  );
}