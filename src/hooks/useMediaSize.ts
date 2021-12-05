import {useEffect, useState} from 'react';
import {useWindowSize} from "./useWindowSize";

export function useMediaSize() {
    let {width} = useWindowSize();
    const [isMediaMobile, setIsMediaMobile] = useState(true);
    const [isMediaTablet, setIsMediaTablet] = useState(true);
    const [isMediaDesktop, setIsMediaDesktop] = useState(true);

    useEffect(() => {
        width < 1024 ? setIsMediaMobile(true) : setIsMediaMobile(false);
        ((width > 1024) && (width < 1400)) ? setIsMediaTablet(true) : setIsMediaTablet(false);
        width > 1400 ? setIsMediaDesktop(true) : setIsMediaDesktop(false);
    }, [width]);

    return [isMediaMobile, isMediaTablet, isMediaDesktop];
}
