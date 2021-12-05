import React from "react";

export const setIntersectionObserver = (observerTarget: React.RefObject<HTMLElement>, observerHandler: () => void) => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            observerHandler()
        }
    }, {
        rootMargin: '10px'
    });
    if (!!observerTarget.current) {
        observer.observe(observerTarget.current)
    }
    return () => {
        if (!!observerTarget.current) {
            observer.unobserve(observerTarget.current)
        }
    }
}