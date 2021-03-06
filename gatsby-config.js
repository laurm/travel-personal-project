/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
 
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "BackRoads",
    description: "Explore awesome worldwide tours and unique adventures. We help you escape the daily routine!",
    author: "@johndoe",
    data: {
      name: "John Doe",
      age: 24,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
      `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-transition-link`
    ],
}
