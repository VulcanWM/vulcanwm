import Layout from '../components/layout';
import styles from '../styles/newsletter.module.css';
import { useRouter } from 'next/router'

export default function NewsletterPage() {
  const router = useRouter()
  const { msg } = router.query
  return (
    <Layout pageTitle="Newsletter">
      <div id="newsletter">
        {msg ?
            <h3><strong>{msg}</strong></h3>
        :
            <>
                <p>Want to subscribe to VulcanWM's Newsletters? Fill in the form below:</p>
                <form method="POST" action="/api/add_email">
                    <input className={styles.input} placeholder="email" type="email" name="email" required/>
                    <br/>
                    <button className={styles.subscribe}>subscribe</button>
                </form>
            </>
        }
      </div>
    </Layout>
  );
}