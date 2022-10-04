import * as menuStyles from 'components/Navigation/CircleMenu/circle-menu.module.scss';

const getScrollBarWidth = () => {
    const $el = document.createElement('div');

    $el.style.position = 'absolute';
    $el.style.top = '-9999px';
    $el.style.width = '50px';
    $el.style.height = '50px';
    $el.style.overflow = 'scroll';
    document.body.appendChild($el);

    const scrollbarWidth = $el.getBoundingClientRect().width - $el.clientWidth;

    document.body.removeChild($el);

    return scrollbarWidth;
};

export const disableDocumentScroll = () => {
    const scrollBarWidth = getScrollBarWidth();

    if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        document.body.classList.add('noScroll');

        const $el = document.querySelector(`.${menuStyles.circleMenu}`);
        $el.style.right = `${parseInt(window.getComputedStyle($el).right, 10) + scrollBarWidth}px`;
    }
};

export const enableDocumentScroll = () => {
    document.body.style.paddingRight = '';
    document.body.classList.remove('noScroll');
    document.querySelector(`.${menuStyles.circleMenu}`).style.right = '';
};

export const scrollToElement = (element) => {
    window.scrollBy({
        left: 0,
        top: element.getBoundingClientRect().top,
        behavior: 'smooth',
    });
};