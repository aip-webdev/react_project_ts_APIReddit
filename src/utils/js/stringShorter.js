import {useMediaSize} from "../../hooks/useMediaSize";

export function stringShorter(string, ...n ){
    let [nMobile, nTablet, nDesktop] = n;
    let [isMediaMobile, isMediaTablet, isMediaDesktop] = useMediaSize();
    if ((string.length <= nMobile) ||( string.length <= nTablet) || (string.length <= nDesktop)) {
        return string;
    }
    if (nMobile && isMediaMobile) {
        return string.substr(0, nMobile-1) + '...'
    }
    else if (nTablet && isMediaTablet) {
        return string.substr(0, nTablet-1) + '...'
    }
    else if (nDesktop && isMediaDesktop) {
        return string.substr(0, nDesktop-1) + '...'
    }
    else return string;

}
