import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'
import Footer from './Footer'

export default function MainContainer({ children }) {
    return (
        <div className={styles.mainContainer}>
            <Navbar />
            <main className={styles.pagesContainer}>
                {children}
            </main>
            <Footer />
        </div>
    )
}