import React from 'react'
import Title from '../TitleStyled'
import styles from '../../css/about.module.css'
// import img from '../../images/defaultBcg.jpeg'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
query aboutImage{
    aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
      childImageSharp{
        fluid(maxWidth:600){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
    const {aboutImage} = useStaticQuery(getAbout);

    return(
        <section className={styles.about}>
        <Title title="about" subtitle="us"/>
        <div className={styles.aboutCenter}>
            <article className={styles.aboutImg}>
                <div className={styles.imgContainer}>
                    {/* <img src={img} alt="About us" /> */}
                    <Img fluid={aboutImage.childImageSharp.fluid} alt="Awesome landscape" />
                </div>
            </article>
            <article className={styles.aboutInfo}>
                <h4>Explore the difference</h4>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                <button type="button" className="btn-primary">Read More</button>
            </article>
        </div>
        </section>
    )
} 

export default About