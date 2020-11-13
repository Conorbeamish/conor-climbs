const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path: ".env"});

module.exports = {
  siteMetadata: {
    title: `Conor Climcs`,
    author: `Conor Beamish`,
    description: "Conor's climbing blog"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src/assets`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {resolve: "gatsby-source-sanity",
      options: {
        projectId: "ky69fho1",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    }]
}
