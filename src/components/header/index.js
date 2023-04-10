import styles from './Header.module.scss'
import logoImg from './logo.png'
import searchImg from './search.png'

export default function Header(){
    return (
        <header className={styles.header}>
            <img src={logoImg} alt='Logo Alura Space' />
            <div className={styles.header__container}>
                <input className={styles.header__input} type='text' placeholder='O que você procura?' />
                <img src={searchImg} alt='Ícone de lupa'/>
            </div>
        </header>
    )
}