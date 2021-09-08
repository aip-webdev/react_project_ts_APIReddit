import React, {useEffect} from "react";

interface IUseMountEventActionProps {
    onClose?: () => void
    ref: React.RefObject<HTMLElement>
}

export function useMouseEventAction({onClose, ref} : IUseMountEventActionProps) {
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                onClose?.()
            }
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [])
}

