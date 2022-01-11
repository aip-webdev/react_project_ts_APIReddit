import { useEffect, useMemo } from 'react';
import useStore from '../store';
import { EContentHeightErrorRate } from '../utils/enums/EContentHeightErrorRate';
import { useMediaSize } from './useMediaSize';


export const useContentElHeight = (): void => {
	const loading = useStore(state => state.posts.loading)
	const [isMediaMobile, isMediaTablet, isMediaDesktop] = useMediaSize()
	/* Введем погрешность для разных экранов, чтобы scroll всегда срабатывал*/
	let errorRate: number
  errorRate = useMemo(() => isMediaTablet ?
    EContentHeightErrorRate.tablet : isMediaDesktop ?
      EContentHeightErrorRate.desktop : EContentHeightErrorRate.mobile,
    [isMediaMobile, isMediaTablet, isMediaDesktop])
  useEffect(() => {
		const headerEl = window.document.getElementById('js-header')
		const contentEl = window.document.getElementById('js-content')
		if (!headerEl || !contentEl || !window.document.documentElement) {
			return
		}
		const oneProc = window.document.documentElement.offsetHeight / 100
		const contentHeight = 100 - Math.ceil(headerEl.offsetHeight / oneProc) - errorRate
		contentEl.style.height = `${contentHeight}vh`
	}, [loading, isMediaMobile, isMediaTablet, isMediaDesktop, errorRate])
}
