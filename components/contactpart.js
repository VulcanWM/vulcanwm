import Image from 'next/image';
import styles from './contactpart.module.css';

export default function ContactPart({ contactName, contactUrl, contactFile, children }) {
  return (
    <div>
      <a href={contactUrl} target="_blank">
        <div className={styles.app}>
          <div className={styles.contact} style={{ 
      backgroundImage: "url(" + contactFile + ")" 
    }}>
          </div>
          <div className={styles.text}>
             <p>{contactName}</p>
          </div>
        </div>
      </a>
    </div>
  );
}


