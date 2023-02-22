import Layout from '../components/layout';
import ContactPart from '../components/contactpart'
import styles from '../styles/contact.module.css';

export default function HomePage() {
  return (
    <Layout pageTitle="Contact">
      <div id="contactpage">
        <h2>Contact me</h2>
        <div className={styles.apps}>
          <ContactPart contactName="GitHub" contactUrl="https://github.com/VulcanWM" contactFile="/logos/github.png">
          </ContactPart>
          <ContactPart contactName="DEV" contactUrl="https://dev.to/vulcanwm" contactFile="/logos/devto.png">
          </ContactPart>
          <ContactPart contactName="Replit" contactUrl="https://replit.com/@VulcanWM" contactFile="/logos/replit.png">
          </ContactPart>
          <ContactPart contactName="Mail" contactUrl="mailto:vulcanwmemail@gmail.com" contactFile="/logos/mail.png">
          </ContactPart>
        </div>
      </div>
    </Layout>
  );
}