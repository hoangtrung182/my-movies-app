import React from 'react';

const MovieCard = ({ Year, Poster, Type, Title}) => {
    return (
        <div className="movie">
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster !== 'N/A' ? Poster : 'https://picsum.photos/400/400'} />
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    )
}
export default MovieCard;