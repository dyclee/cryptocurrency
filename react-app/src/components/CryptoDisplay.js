import React from 'react';

export const CryptoDisplay = ({crypto}) => {
    let roundPrice = (crypto.quote.USD.price).toFixed(2);
    return (<>
        <div className="currency-container">
            <div className="currency-header">
                {crypto.name}
            </div>
            <div className="currency-abbrev">
                ({crypto.symbol})
            </div>
            <div className="quote-container">
                <div className="currency-quote">
                    $ {roundPrice}
                </div>
            </div>
        </div>
    </>)
}
