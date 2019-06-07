module.exports = {
  siteMetadata: {
    title: `Palomar Estates West #73`,
    description: `2 bed, 2 bath, triple wide home in Palomar Estates West. Washer/dryer from 2014. 1 yr old coil in heater, A/C from 2004, and water heater from 2015. Roof recently replaced (2016). The home has curved poles & louvers, low maintenance landscaping, dual pane windows except on sliding glass door, and hand-textured walls inside the home. It has been freshly painted with on trend colors, and has trex steps in the front & back entrances.`,
    author: `@leelandmiller`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homeImages`,
        path: `${__dirname}/src/images/home`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Tangerine', 'Saira Extra Condensed']
        }
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GCMS",
        fieldName: "gcms",
        url: "https://api-uswest.graphcms.com/v1/cjwcf1h6p1g4001d1trec3fpt/master",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
