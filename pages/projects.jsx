import Layout from '../components/layout';
import styles from '../styles/projects.module.css';

const projects = {
  "Distribute Time": {
    "Link": "https://distribute-time.vulcanwm.repl.co",
    "Desc": "automatically make your own timetable",
    "Tags": ["Flask", "HTML,CSS,JS", "Tool"]
  }, 
  "Escape the Punch": {
    "Link": "https://escape-the-punch.vulcanwm.repl.co",
    "Desc": "try to escape the ghost's punch",
    "Tags": ["kaboom.js", 'Game']
  },
  "What If": {
    "Link": "https://what-if.vulcanwm.repl.co",
    "Desc": "a website where you will face hypothetical scenarios",
    "Tags": ["Flask", "HTML,CSS,JS", "MongoDB", "Forum", "ReplAuth"]
  }, 
  "Clicker": {
    "Link": "https://Clicker.vulcanwm.repl.co",
    "Desc": "my first Express.JS game: click to get points",
    "Tags": ["express.js", "HTML,CSS,JS", "ReplitDB", "ReplAuth", "Game"]
  },
  "wizard vs. snake": {
    "Link": "https://wizard-vs-snake.vulcanwm.repl.co/",
    "Desc": "escape the snakes while exploring wizard world",
    "Tags": ['kaboom.js', 'express.js', 'HTML,CSS,JS', 'ReplitDB', 'ReplAuth']
  },
  "Jason Clicker": {
    "Link": "https://jason-clicker.vulcanwm.repl.co",
    "Desc": "try to make jason stronger by clicking",
    "Tags": ["kaboom.js", "Game"]
  }, 
  "Colourful Starry Night": {
    "Link": "https://colourful-starry-night.vulcanwm.repl.co",
    "Desc": "a colourful starry night generator",
    "Tags": ["HTML,CSS,JS", "Fun"]
  }, 
  "Munity": {
    "Link": "https://munity.vulcanwm.repl.co",
    "Desc": "test yourself on song lyrics",
    "Status": "progress",
    "Tags": ["Flask", "HTML,CSS,JS", "MongoDB", "Game"]
  }, 
  "OvalEyes": {
    "Link": "https://ovaleyes.ovaleyes.repl.co",
    "Desc": "a social media website",
    "Tags": ["Flask", "HTML,CSS,JS", "MongoDB", "Forum"]
  }, 
  "We Greek": {
    "Link": "https://wegreek.vulcanwm.repl.co",
    "Desc": "a greek mythology wikipedia",
    "Tags": ['Flask', 'HTML,CSS,JS', 'MongoDB', "Forum"]
  }, 
  "Jasonism": {
    "Link": "https://jasonism.vulcanwm.repl.co",
    "Desc": "make your block of wood mighty",
     "Tags": ['Flask', 'HTML,CSS,JS', 'MongoDB', "Game"]
  }, 
  "FRANK": {
    "Link": "https://frank.vulcanwm.repl.co",
    "Desc": "a multi-purpose website",
    "Status": "progress",
     "Tags": ['Flask', 'HTML,CSS,JS', 'MongoDB', "Forum"]
  }, 
  "Drinks Cabin": {
    "Link": "https://drinks-cabin.vulcanwm.repl.co",
    "Desc": "own your own drinks company",
     "Tags": ['Flask', 'HTML,CSS,JS', 'MongoDB', "Game"]
  }, 
  "BesucheResort": {
    "Link": "https://besucheresort.vulcanwm.repl.co",
    "Desc": "search for money in a resort",
     "Tags": ['Flask', 'HTML,CSS,JS', 'MongoDB', "AFrame", "Game"]
  }, 
  "Imposter": {
    "Link": "https://imposter.vulcanwm.repl.co",
    "Desc": "guess who is the imposter in your online lesson",
    "Tags": ['Flask', 'HTML,CSS,JS', 'MongoDB', "Game"]
  },
  "Boat Shoot": {
    "Link": "https://boat-shoot.vulcanwm.repl.co/",
    "Desc": "try to shoot boats and avoid bombs",
    "Tags": ['kaboom.js', "Game"]
  }
}

const project_names = Object.keys(projects);

export default function ProjectsPage() {
  return (
    <Layout pageTitle="Projects">
      <div className={styles.projects}>
        {project_names.map((project,index)=>{
          <a href={projects[project]['Link']} class={projects[project]['Status']} target="_blank">
            <div className={styles.project}>
             <h3>{project}</h3>
             {projects[project] == "progress" ? (
                <>
                 <p class="red">In progress</p>
               </>
              ) : (
                <>
                 <p>{projects[project]['Desc']}</p>
               </>
              )}
            <div className={styles.tags}>
               {projects[project]['Tags'].map((tag,tag_index)=>{
                  <p className="tag {tag}">{tag}</p>
                })}
             </div>
            </div>
          </a>
        })}
      </div>
    </Layout>
  );
}