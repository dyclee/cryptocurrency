import React from 'react';
import { DataDialog } from './DataDialog';

export const CryptoDisplay = ({crypto}) => {
    let roundPrice = (crypto.quote.USD.price).toFixed(2);
    let hourChange = (crypto.quote.USD.percent_change_1h).toFixed(2);
    return (<>
        <div className="currency-container">
            <div className="currency-header">
                {crypto.cmc_rank}. {crypto.name}
            </div>
            <div className="currency-abbrev">
                ({crypto.symbol})
            </div>
            <div className="quote-container">
                <div className="currency-quote">
                    $ {roundPrice}
                </div>
                {hourChange >= 0 ?
                <div className="currency-change-plus">
                    $ {hourChange}
                </div>
                :
                <div className="currency-change-minus">
                    $ {hourChange}
                </div>
                }
            </div>
            <DataDialog crypto={crypto} />
        </div>
    </>)
}
