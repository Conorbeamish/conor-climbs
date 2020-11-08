const dotenv = require("dotenv");

dotenv.config({path: ".env"});

module.exports = {
  siteMetadata: {
    title: `Conor Climcs`,
    author: `Conor Beamish`,
    description: "Conor's climbing blog"
  },
  plugins: [
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
