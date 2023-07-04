import React from 'react';

export const Loader: React.FC = () => {
    return (
        <div className="preloader">
            <div className="lds-roller">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};
