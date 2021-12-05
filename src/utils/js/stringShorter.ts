import {useMediaSize} from "../../hooks/useMediaSize";
/**
 * Сокращает строку в зависимости от размера экрана
 *
 **/
export function stringShorter(string: string, ...n: number[]) {
    let [nMobile, nTablet, nDesktop] = n;
    let [isMediaMobile, isMediaTablet, isMediaDesktop] = useMediaSize();
    if ((string.length <= nMobile) && (string.length <= nTablet) && (string.length <= nDesktop)) {
        return string;
    }
    if (nMobile && isMediaMobile) {
        return (string.length <= nMobile) ? string : `${string.slice(0, nMobile - 1)}...`
    } else if (nTablet && isMediaTablet) {
        return (string.length <= nTablet) ? string : `${string.slice(0, nTablet - 1)}...`
    } else if (nDesktop && isMediaDesktop) {
        return (string.length <= nDesktop) ? string : `${string.slice(0, nDesktop - 1)}...`
    } else {
        return string;
    }
}
