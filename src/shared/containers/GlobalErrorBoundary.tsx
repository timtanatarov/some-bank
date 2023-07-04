import React, { Component } from 'react';
import StackTrace from 'stacktrace-js';

import { errorInfoService } from 'src/services/api';

import { ErrorPage } from '../ErrorPage';

type GlobalErrorBoundaryState = {
    hasError: boolean;
};

export const createErrorStack = (error: Error) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
        const createStackFrames = (stackFrames: any) => {
            const stack = stackFrames
                .map((sf: any) => {
                    return sf.toString();
                })
                .join('\n');
            void errorInfoService.post('/log', {
                [error.message]: stack,
            });
        };

        StackTrace.fromError(error).then(createStackFrames);
    }
};

export class GlobalErrorBoundary extends Component<{ children: JSX.Element }, GlobalErrorBoundaryState> {
    state = {
        hasError: false,
    };

    componentDidCatch(error: Error, errorInfo: Error | React.ErrorInfo) {
        createErrorStack(error);
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage />;
        }

        return this.props.children;
    }
}
