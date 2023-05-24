import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Button = () => {
    return (
        <div className='orange-btn'>
           <ConnectButton accountStatus="address" chainStatus={{largeScreen: "none"}} showBalance={false} />
        </div>

    );
};

export default Button;