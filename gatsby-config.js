/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages"
    },
    // Add this new entry for the `contents` directory
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "contents",
        path: "./src/contents/",
      },
      __key: "contents"
    }
  ]
};
