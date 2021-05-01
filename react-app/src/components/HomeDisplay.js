import React from 'react';
import { CryptoDisplay } from './CryptoDisplay';


export default function HomeContainer ({data}) {

    return (<>
        <div className="home-container">
            {data.map((crypto) => {
                return (<>
                    <CryptoDisplay crypto={crypto} />
                </>)
            })}
        </div>
    </>)
}
