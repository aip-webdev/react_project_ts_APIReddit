import {useState} from 'react';
import {useEventListenerAction} from "./useEventListenerAction";

export function useHTMLHeight() {
    const [height, setHeight] = useState(0);
    useEventListenerAction('resize',
        () => setHeight(window.document.documentElement.clientHeight)
    )
    return height;
}
