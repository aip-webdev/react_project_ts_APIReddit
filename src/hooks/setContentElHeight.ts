import {useEffect, } from 'react';
import {useBodyHeight} from "./useBodyHeight";
import {useMediaSize} from "./useMediaSize";
import {useSelector} from "react-redux";
import {IInitState} from "../store";

export function setContentElHeight() {
    let loading = useSelector<IInitState, boolean>((state) => state.posts.loading);
    const [, isMediaTablet, isMediaDesktop] = useMediaSize();
    /*Введем погрешность для разных экранов, чтобы scroll всегда срабатывал*/
    let errorRate =  isMediaTablet ? 10 : (isMediaDesktop ? 0 : 5)
    let height = useBodyHeight();
    useEffect(() => {
        let headerEl = window.document.getElementById('js-header');
        let contentEl = window.document.getElementById('js-content');
        if (!headerEl || !contentEl) return;
        console.log(height)
        let oneProc = (height / 100)
        console.log(headerEl.offsetHeight)
        console.log(oneProc)
        let contentHeight = 100 - Math.ceil(headerEl.offsetHeight / oneProc) - errorRate;
        console.log(contentHeight)
        contentEl.style.height = `${contentHeight}vh`;


        console.log(contentEl.style.height)

    }, [loading]);
}
