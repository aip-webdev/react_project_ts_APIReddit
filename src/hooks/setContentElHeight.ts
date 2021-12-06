import {useEffect} from 'react';
import {useHTMLHeight} from "./useHTMLHeight";
import {useMediaSize} from "./useMediaSize";

export function setContentElHeight() {
    const [, isMediaTablet, isMediaDesktop] = useMediaSize();
    /*Введем погрешность для разных экранов, чтобы scroll всегда срабатывал*/
    let errorRate = isMediaTablet ? 12 : (isMediaDesktop ? 18 : 0);
    let height = useHTMLHeight();

    useEffect(() => {
        let headerEl = window.document.getElementById('js-header');
        let contentEl = window.document.getElementById('js-content');
        if (!headerEl || !contentEl) return;
        let contentHeight = 100 - Math.ceil(headerEl.offsetHeight / (height / 100)) - errorRate;
        contentEl.style.height = `${contentHeight}vh`;

    }, [height, errorRate]);
}
