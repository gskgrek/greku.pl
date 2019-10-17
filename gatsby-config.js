const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Grzegorz Sieczkowski`,
        description: `Grzegorz Sieczkowski personal site`,
        author: `@gskgrek`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                assets: path.join(__dirname, 'src/assets'),
                components: path.join(__dirname, 'src/components'),
                pages: path.join(__dirname, 'src/pages'),
                sections: path.join(__dirname, 'src/sections'),
                utils: path.join(__dirname, 'src/utils'),
                src: path.join(__dirname, 'src'),
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                data: `@import "./src/styles/math";`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: true,
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$/,
                exclude: /(node_modules|cache|public)/,
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-stylelint',
            options: { files: ['**/*.js'] },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
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
                background_color: `#FFFFFF`,
                theme_color: `#FFFFFF`,
                display: `minimal-ui`,
                stripMetadata: true,
                defaultQuality: 70,
                icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
