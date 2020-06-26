import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
    
  const data = useStaticQuery(graphql`
    query FirstQuery {
        site {
            siteMetadata {
              title
              description
              author
              data {
                  age
              }  
            }
        }
    }
  `)  

    return (
        <div>
            <h1>title: {data.site.siteMetadata.title}</h1>
            <h2>author: {data.site.siteMetadata.author}</h2>
        </div>
    )
}

export default Header