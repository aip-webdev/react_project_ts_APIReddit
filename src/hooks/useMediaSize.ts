import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';

export const useMediaSize = (): boolean[] => {
  const { width } = useWindowSize();
  const [mediaPoint, setMediaPoint] = useState({
    isMediaMobile: true,
    isMediaTablet: true,
    isMediaDesktop: true,
  })
  let {isMediaMobile, isMediaTablet, isMediaDesktop} = mediaPoint
  useEffect(() => {
    if (width < 1024) {
      setMediaPoint({
        isMediaMobile: true,
        isMediaTablet: false,
        isMediaDesktop: false,
      })
    } else if (width > 1024 && width < 1400) {
      setMediaPoint({
        isMediaMobile: false,
        isMediaTablet: true,
        isMediaDesktop: false,
      })
    } else {
      setMediaPoint({
        isMediaMobile: false,
        isMediaTablet: false,
        isMediaDesktop: true,
      })
    }
  }, [width])

  return [isMediaMobile, isMediaTablet, isMediaDesktop]
}
