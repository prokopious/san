module.exports = {
  siteMetadata: {
    title: `Gatsby + Sanity + Snipcart Ecommerce Starter`,
    siteUrl: 'https://gatsbysnipcartsanity.netlify.app',
    description: 'A Gatsby + Sanity + Snipcart Ecommerce Starter 🍞',
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        //this key is hooked up to a test snipcart account. replace this key with yours.
        apiKey: 'ZTNkOWE1YmYtOGI4My00NDJhLTg5MzctODY4YTNiM2ViYWFkNjM3Mzc2MTU4MjUxNTM1Mzg3',
        autopop: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsbysnipcartsanity`,
        short_name: `gss`,
        start_url: `/`,
        background_color: `bg`,
        theme_color: `darkBlue`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `8ob6ehcj`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: '',

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
}
