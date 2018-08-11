module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: `pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
