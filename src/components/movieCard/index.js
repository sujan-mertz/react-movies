import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({url, poster, title}) => {
    return(
        <div className="c-card">
            <Link to={url} className="image d-block">
                <img src={poster} alt={title}/>
            </Link>
            <Link to={url} className="text d-block">
                {title}
            </Link>
        </div>
    )
}

export default MovieCard;
