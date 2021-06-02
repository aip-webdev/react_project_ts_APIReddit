import { useEffect, useState } from 'react';
import {useWindowSize} from "../utils/react/useWindowSize";

export function useMediaSize() {
    let windowWidth = useWindowSize();
    const [isMediaMobile, setIsMediaMobile] = useState(true);
    const [isMediaTablet, setIsMediaTablet] = useState(true);
    const [isMediaDesktop, setIsMediaDesktop] = useState(true);

    useEffect(() => {
        windowWidth < 1024 ? setIsMediaMobile(true) : setIsMediaMobile(false);
        ((windowWidth > 1024) && (windowWidth < 1400)) ? setIsMediaTablet(true) : setIsMediaTablet(false);
        windowWidth > 1400 ? setIsMediaDesktop(true) : setIsMediaDesktop(false);
    }, [windowWidth]);

    return [isMediaMobile, isMediaTablet, isMediaDesktop];
}
