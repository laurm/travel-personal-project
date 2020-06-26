import React, {useState} from 'react'
import Anilink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/navbar.module.css'
import {FaAlignRight} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import logo from '../images/logo.svg'


const Navbar = () => {
    const [isOpen, setNav] = useState(false)
const toggleNav = () => {  
    setNav(isOpen => !isOpen)
}
    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <img src={logo} alt="App Logo" />
                    <button type="button" className={styles.logoBtn} onClick={toggleNav}>
                      {isOpen ? <FaTimes className={styles.logoIcon} /> : <FaAlignRight className={styles.logoIcon} />}
                    </button>
                </div>
                <ul className={isOpen?`${styles.navLinks} ${styles.showNav}`:`${styles.navLinks}`}>
                    {links.map((item, index)=>{
                        return(<li key={index}><Anilink fade to={item.path}>{item.text}</Anilink></li>)
                    })}
                </ul>
                <div className={styles.navSocialLinks}>
                    {socialIcons.map((icon, index) => {
                        return(<a href={icon.url} key={index} target="_blank" rel="noopener noreferrer">{icon.icon}</a>)
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar