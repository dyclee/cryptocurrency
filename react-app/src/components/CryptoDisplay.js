import React from 'react';

export const CryptoDisplay = ({crypto}) => {
    return (<>
        <div className="currency-container">
            <div>
                {crypto.name}
            </div>
        </div>
    </>)
}
