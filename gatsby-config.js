module.exports = {
  siteMetadata: {
    title: `Anthony Pietrofeso's Website`,
    description: `A collection of works by Anthony Pietrofeso`,
    author: ` Anthony Pietrofeso`,
    siteUrl: `https://apietrofeso.net/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anthony Pietrofeso's Website`,
        short_name: `Anthony's site`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
  ],
};
