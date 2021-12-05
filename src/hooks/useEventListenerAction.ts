import {EventHandler, useEffect} from "react";

export function useEventListenerAction(eventType: string, eventAction: EventHandler<any>, hookDeps?: Array<any> | undefined) {
    useEffect(() => {
        window.addEventListener(eventType, eventAction);
        return () => window.removeEventListener(eventType, eventAction);
    }, hookDeps ?? undefined)
}
