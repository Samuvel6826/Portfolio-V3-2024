import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Cryptos = () => {
    const data = [
        { displayText: 'Bitcoin (BTC)', copyText: 'bc1qkggjyesxukz6lajf9536jf9rqen8k745x3xddcwvs02fwklxac5q89wswd' },
        { displayText: 'Ethereum (ETH/ERC20)', copyText: '0xead666fc8a3ce2f16e26cc12d526c950f6946e95' },
        { displayText: 'Tether (USDT/TRC20)', copyText: 'TAWFTxfmRWC5QPK6T61SpNBX1ba6CKdZdA' },
        { displayText: 'Binance Coin (BNB)', copyText: '0xead666fc8a3ce2f16e26cc12d526c950f6946e95' },
        { displayText: 'Tron Coin (TRX)', copyText: 'TAWFTxfmRWC5QPK6T61SpNBX1ba6CKdZdA' },
    ];

    const [copied, setCopied] = useState(null);

    const handleCopy = (index) => {
        setCopied(index);
        setTimeout(() => {
            setCopied(null); // Reset after 5 second
        }, 5000);
    };

    return (
        <div className="flex flex-col items-center gap-4 bg-secondary p-4">
            {data.map((item, index) => (
                <div key={index} className="flex w-full max-w-md items-center space-x-4 rounded-lg bg-gray-100 p-4 shadow-md">
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
