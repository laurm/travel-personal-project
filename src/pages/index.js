import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Anilink from 'gatsby-plugin-transition-link/AniLink'
import FeaturedTours from '../components/Home/FeaturedTours'

export default ({data}) => (
    <Layout>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner title="Continue Exploring" info="lorem ipsum text">
        <Anilink fade to="/tours" className="btn-white">explore tours</Anilink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours />
    </Layout> 
)


export const query = graphql`
query {
  defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`