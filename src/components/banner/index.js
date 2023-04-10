import styles from './Banner.module.scss'
import bannerImg from './banner.png'

export default function Banner(){
    return (
        <div className={styles.banner}>
            <h1>A galeria mais completa de fotos do espaço!</h1>
            <img src={bannerImg} alt="A imagem da terra vista do espaço" />
        </div>
    )
}