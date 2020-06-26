import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import Anilink from 'gatsby-plugin-transition-link/AniLink'
import Banner from '../components/Banner'

const pageNotFound = () => (
    <Layout>
        <header className={styles.error}>
            <Banner title="Oops! Page not Found">
                <Anilink fade to="/" className="btn-white">
                    Back to homepage
                </Anilink>
            </Banner>
        </header>
    </Layout>
)

export default pageNotFound