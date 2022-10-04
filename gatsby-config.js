const path = require('path');

const gatsbyRequiredRules = path.join(
    process.cwd(),
    "node_modules",
    "gatsby",
    "dist",
    "utils",
    "eslint-rules"
);

module.exports = {
    siteMetadata: {
        title: `Grzegorz Sieczkowski`,
        description: `Grzegorz Sieczkowski personal site`,
        author: `@gskgrek`,
    },
    plugins: [{
            resolve: 'gatsby-plugin-root-import',
            options: {
                assets: path.join(__dirname, 'src/assets'),
                components: path.join(__dirname, 'src/components'),
                hoc: path.join(__dirname, 'src/hoc'),
                pages: path.join(__dirname, 'src/pages'),
                sections: path.join(__dirname, 'src/sections'),
                utils: path.join(__dirname, 'src/utils'),
                src: path.join(__dirname, 'src'),
            },
        },

        // styles
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                sassOptions: {
                    includePaths: ['./src/styles'],
                },
                additionalData: `@import "./src/styles/global";`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: true,
            },
        },

        // linters
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                rulePaths: [gatsbyRequiredRules],
                extensions: ["js", "jsx", "ts", "tsx"],
                exclude: ["node_modules", "cache", "public", ".cache", "bower_components"],
            },
        },

        // images
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },

        // markdown
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-projects`,
                path: `${__dirname}/src/markdown/projects`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-plugin-image`,
                    `gatsby-plugin-sharp`,
                    `gatsby-transformer-sharp`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1920,
                        },
                    },
                ],
            },
        },

        // document head
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#FFFFFF`,
                display: `minimal-ui`,
                icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};