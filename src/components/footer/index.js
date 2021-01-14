import React from 'react';

const ReactFooter = () => {
    const date = new Date();
    return(
        <div className="c-footer">
            <div className="c-container">
                <p>&copy; Copyright {date.getFullYear()}.</p>
            </div>
        </div>
    )
}

export default ReactFooter;