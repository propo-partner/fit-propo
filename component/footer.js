import styles from '../styles/footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_text}>
      PROPOFM Copyright © 2019 by <a href="https://submarine-c.com/" target="_blank">Submarine LLC.</a>
      </div>
    </footer>
  )
}
