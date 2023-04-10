import { Fragment } from "react"
import Header from "../../components/header"
import Menu from "../../components/menu"
import Banner from "../../components/banner"
import styles from "./Home.module.scss"

export default function HomePage(){
    return (
        <Fragment>
            <Header />
            <main>
                <section className={styles.main}>
                    <Menu />
                    <Banner />
                </section>
            </main>
        </Fragment>
    )
}