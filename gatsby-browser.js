/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// don't scroll the page when the user goes to the project url (we don't load the page and show the overlay instead)
exports.shouldUpdateScroll = (data) => {
    if (/^\/projects/.test(data.routerProps.location.pathname) && !!data.prevRouterProps) {
        const scrollPosition = data.getSavedScrollPosition(data.prevRouterProps.location);
        window.scrollTo({
            left: 0,
            top: scrollPosition[1],
            behavior: 'auto',
        });
        return false;
    }
    return true;
};
