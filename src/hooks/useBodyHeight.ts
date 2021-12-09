import {useState} from 'react';
import {useEventListenerAction} from "./useEventListenerAction";

export function useBodyHeight() {
    const [height, setHeight] = useState(0);
    useEventListenerAction('resize', () => setHeight(window.document.body.clientHeight))
    return height;
}
