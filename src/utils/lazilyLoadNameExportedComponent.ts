import React from 'react';

// Lazy loading function for React components imported with named export

export function lazilyLoadNameExportedComponent<
    T extends React.ComponentType<I>,
    I extends { [K2 in K]: T },
    K extends keyof I
>(factory: () => Promise<I>, name: K): I {
    return Object.create({
        [name]: React.lazy(() => factory().then((module) => ({ default: module[name] }))),
    });
}
