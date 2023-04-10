import styles from './Footer.module.scss'
import fbIcon from './facebook.svg'
import igIcon from './instagram.svg'
import ttIcon from './twitter.svg'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__socialWrapper}>
                <a href=''><img src={fbIcon} alt='Logo Facebook' /></a>
                <a href=''><img src={igIcon} alt='Logo Instagram' /></a>
                <a href=''><img src={ttIcon} alt='Logo Twitter' /></a>
            </div>
            <span className={styles.footer__copy}>Desenvolvido por Marco & Alura</span>
        </footer>
    )
}