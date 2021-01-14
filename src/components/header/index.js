import React from 'react';
import ReactLogo from '../logo';
import ReactNavigation from '../navigation';

const ReactHeader = () => {
    return(
        <div className="c-header">
            <div className="c-container">
                <div className="c-nav">
                    <ReactLogo/>
                    <ReactNavigation/>
                </div>
            </div>
        </div>
    )
}

export default ReactHeader;