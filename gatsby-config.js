module.exports = {
    siteMetadata: {
        title: `Elisaeaureliano`,
        description: `Elisa & Aureliano are getting married`,
        author: `aureliano`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `elisaeaureliano`,
                short_name: `elisaeaureliano`,
                start_url: `/`,
                background_color: `#EDC0AD`,
                theme_color: `#EDC0AD`,
                display: `minimal-ui`,
                icon: `src/images/favicon-32x32.png` // This path is relative to the root of the site.
            }
        }
    ]
};
