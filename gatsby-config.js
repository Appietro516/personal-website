module.exports = {
  siteMetadata: {
    title: `Anthony Pietrofeso's Website`,
    description: `A collection of works by Anthony Pietrofeso`,
    author: ` Anthony Pietrofeso`,
    siteUrl: `https://apietrofeso.net/`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {resolve: `gatsby-remark-images`}
        ],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anthony Pietrofeso's Website`,
        short_name: `Anthony's site`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/gatsby-icon.png`,
      },
    },
    {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
      },
    },
    {
    resolve: 'gatsby-source-filesystem',
      options: {
        name: 'ProjectsDataJson',
        path: `${__dirname}/src/ProjectsData.json`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
