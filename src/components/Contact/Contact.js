import React from 'react'
import Title from '../TitleStyled'
import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="Contact" subtitle="us" />
            <div className={styles.center}>
                <form action="https://formspree.io/qnrf@ppetw.com" method="post" className={styles.form}>
                <div>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className={styles.formControl} 
                    placeholder="john doe" />
                     <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className={styles.formControl} 
                    placeholder="johndoe@email.com" />
                    <div>
                    <textarea 
                    name="message" 
                    id="message" 
                    rows="10" className={styles.formControl}
                    placeholder="hello there" />
                    </div>
                    <div>
                        <input type="submit"
                        value="submit here" 
                        className={styles.submit} />
                    </div>
                </div>
                </form>
            </div>
        </section>
    )
}

export default Contact