import React, { useState, useEffect } from 'react';

const Card = ({ cardtype, cardtitle, backgroundurl }) => {
    const [loaded, setLoaded] = useState(false);
    
     

    useEffect(() => {
        const image = new Image();
        image.onload = () => {
            setLoaded(true);
        };
        image.src = backgroundurl;
    }, [backgroundurl]);

    if (!loaded) {
        return null;
    }

    return (
        <li className={cardtype} style={{ backgroundImage: `url(${backgroundurl})` }}>
            <div className={cardtype + '-title-text'}>
                <p className={cardtype + '-title-rect'}>{cardtitle}</p>
            </div>
        </li>
    );
};

export default Card;
