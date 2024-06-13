import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Cryptos = () => {
    const data = [
        { displayText: 'Bitcoin (BTC)', copyText: 'Copy Text 1' },
        { displayText: 'Ethereum (ETH)', copyText: 'Copy Text 2' },
        { displayText: 'Tether (USDT)', copyText: 'Copy Text 3' },
        { displayText: 'Binance Coin (BNB)', copyText: 'Copy Text 4' },
        { displayText: 'Tron Coin (TRX)', copyText: 'Copy Text 5' },
    ];

    const [copied, setCopied] = useState(null);

    const handleCopy = (index) => {
        setCopied(index);
        setTimeout(() => {
            setCopied(null); // Reset after 5 second
        }, 5000);
    };

    return (
        <div className="flex flex-col items-center space-y-4 p-4">
            {data.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md">
                    <div className="flex-grow text-lg">{item.displayText}</div>
                    <CopyToClipboard text={item.copyText} onCopy={() => handleCopy(index)}>
                        <button
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${copied === index ? 'bg-green-500 hover:bg-green-500' : ''}`}
                        >
                            {copied === index ? 'Copied!' : 'Copy'}
                        </button>
                    </CopyToClipboard>
                </div>
            ))}
        </div>
    );
};

export default Cryptos;
