import {useEffect, useState} from 'react';

export function useHTMLHeight() {
    const [height, setHeight] = useState(0);
    useEffect(() => {
        function updateSize() {
            setHeight(window.document.documentElement.clientHeight);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    });
    return height;
}
