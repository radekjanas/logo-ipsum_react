import React from 'react';
import TopBar from './top-bar/TopBar';
import TopHero from './top-hero/TopHero';

function Top() {
    return(
        <>
            <header className="top">
                <TopBar />
                <TopHero />
            </header>
        </>
    );
}

export default Top;