import {useEffect} from 'react';
import {useHTMLHeight} from "./useHTMLHeight";
import {getWindowGlobal} from "../utils/js/getWindowGlobal";
import {useMediaSize} from "./useMediaSize";

export function setContentElHeight() {
    const windowG = getWindowGlobal();
    if (!windowG) return;
    const [isMediaMobile, isMediaTablet, isMediaDesktop] = useMediaSize();
    /*Введем погрешность для разных экранов, чтобы scroll всегда срабатывал*/
    let errorRate = isMediaTablet ? 12 : (isMediaDesktop ? 18 : 0);
    let height = useHTMLHeight();
    let headerEl = windowG.document.getElementById('js-header');
    let contentEl = windowG.document.getElementById('js-content');
    useEffect(() => {
        if (!headerEl || !contentEl) return;
        let contentHeight = 100 - Math.ceil(headerEl.offsetHeight / (height / 100)) - errorRate;
        contentEl.style.height = `${contentHeight}vh`;

    }, [height, headerEl, contentEl, errorRate]);
}
