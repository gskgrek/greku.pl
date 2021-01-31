/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;
    // if we are processing main page
    if (page.path === '/') {
        // copy page data
        const newPage = { ...page };
        // add matchPath for client side dynamic check
        newPage.matchPath = '/*/*'; // set dynamic routes match rule (asterisk means any string)
        // create new page
        createPage(newPage);
    }
};
