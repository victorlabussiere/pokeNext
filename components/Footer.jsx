import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2023</p>
            <h2>Desenvolvido por <a href="https://github.com/victorlabussiere" target='_blank'>Victor Labussiere</a></h2>
        </footer>
    )
}