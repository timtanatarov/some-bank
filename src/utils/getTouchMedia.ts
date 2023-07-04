export const getTouchMedia = () =>
    //TS does not know about some legacy properties so few lines are ignored
    {
        let hasTouchScreen = false;
        if ('maxTouchPoints' in navigator) {
            hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if ('msMaxTouchPoints' in navigator) {
            // @ts-ignore
            hasTouchScreen = navigator.msMaxTouchPoints > 0;
        } else {
            const mQ = window.matchMedia?.('(pointer:coarse)');
            if (mQ?.media === '(pointer:coarse)') {
                hasTouchScreen = !!mQ.matches;
            } else if ('orientation' in window) {
                hasTouchScreen = true;
            } else {
                // @ts-ignore
                const UA = navigator.userAgent;
                hasTouchScreen =
                    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
            }
        }

        return hasTouchScreen;
    };
