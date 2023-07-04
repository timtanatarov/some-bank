import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDelayedCallback } from 'src/hooks/useDelayedCallback';

export const PortalToYMark = ({ id, children }: { id: string; children: React.ReactNode }) => {
    const [isYmarkerReady, setIsYmarkerReady] = useState<boolean | undefined>();
    const delayed = useDelayedCallback(() => {
        document.getElementById(id) && setIsYmarkerReady(true);
    });

    useEffect(() => {
        setIsYmarkerReady(!!document.getElementById(id));
        let timeout: number | undefined;
        if (isYmarkerReady === false) {
            timeout = delayed();
        }
        return () => {
            timeout && clearTimeout(timeout);
        };
    }, [id, isYmarkerReady, delayed]);

    if (!isYmarkerReady) return null;

    const elemInYmarker = document.getElementById(id);
    const parent = elemInYmarker?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;
    if (parent) {
        parent.style.opacity = '0';
    }
    // creating portal in transparent element will make portal content transparent so we put it into its parent
    return parent?.parentElement ? createPortal(children, parent.parentElement) : null;
};
