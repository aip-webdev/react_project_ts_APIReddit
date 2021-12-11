import {useEffect, useMemo} from 'react';
import {useBodyHeight} from "./useBodyHeight";
import {useMediaSize} from "./useMediaSize";

export function setContentElHeight() {
    const [isMediaMobile, isMediaTablet, isMediaDesktop] = useMediaSize();
    /*Введем погрешность для разных экранов, чтобы scroll всегда срабатывал*/
    let errorRate = useMemo(() => isMediaTablet ? 10 : (isMediaDesktop ? 0 : 5), [isMediaDesktop, isMediaTablet, isMediaMobile]);
    let height = useBodyHeight();

    useEffect(() => {
        let headerEl = window.document.getElementById('js-header');
        let contentEl = window.document.getElementById('js-content');
        if (!headerEl || !contentEl) return;

        let contentHeight = 100 - Math.ceil(headerEl.offsetHeight / (height / 100)) - errorRate;
        contentEl.style.height = `${contentHeight}vh`;

    }, [height, errorRate]);
}
