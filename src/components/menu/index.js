import styles from './Menu.module.scss'

// icones

import homeIcon from '../../assets/icones/home-ativo.png'
import maisVistasIcon from '../../assets/icones/mais-vistas-inativo.png'
import maisCurtidasIcon from '../../assets/icones/mais-curtidas-inativo.png'
import novasIcon from '../../assets/icones/novas-inativo.png'
import surpreendaMeIcon from '../../assets/icones/surpreenda-me-inativo.png'

export default function Menu(){
    return (
        <div className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <img src={homeIcon} alt='Icone home' />
                    <a>
                        <span>Início</span>
                    </a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistasIcon} alt='Icone maisVistas' />
                    <a>
                        <span>Mais vistas</span>
                    </a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidasIcon} alt='Icone maisCurtidas' />
                    <a>
                        <span>Mais curtidas</span>
                    </a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novasIcon} alt='Icone novas' />
                    <a>
                        <span>Novas</span>
                    </a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreendaMeIcon} alt='Icone surpreendaMe' />
                    <a>
                        <span>Surpreenda-me</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}