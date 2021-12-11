import {useEffect, } from 'react';
import {useMediaSize} from "./useMediaSize";
import {useSelector} from "react-redux";
import {IInitState} from "../store";

export function setContentElHeight() {
    let loading = useSelector<IInitState, boolean>((state) => state.posts.loading);
    const [isMediaMobile, isMediaTablet, isMediaDesktop] = useMediaSize();
    /*Введем погрешность для разных экранов, чтобы scroll всегда срабатывал*/
    let errorRate =  isMediaTablet ? 12 : (isMediaDesktop ? 10 : 5)
    useEffect(() => {
        let headerEl = window.document.getElementById('js-header');
        let contentEl = window.document.getElementById('js-content');
        if (!headerEl || !contentEl || !window.document.documentElement) return;
        let oneProc = (window.document.documentElement.offsetHeight / 100)
        let contentHeight = 100 - Math.ceil(headerEl.offsetHeight / oneProc) - errorRate;
        contentEl.style.height = `${contentHeight}vh`;
    }, [loading, isMediaMobile, isMediaTablet, isMediaDesktop]);
}
