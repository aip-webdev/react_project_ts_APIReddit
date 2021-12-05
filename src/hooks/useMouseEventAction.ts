import React from "react";
import {useEventListenerAction} from "./useEventListenerAction";

interface IUseMountEventActionProps {
    action: () => void
    ref: React.RefObject<HTMLElement>
}

export function useMouseEventAction({action, ref}: IUseMountEventActionProps) {
        useEventListenerAction('click', (e) => {
            if (e.target instanceof Node && !ref.current?.contains(e.target)) {
                action()
            }
        }, [])
}

