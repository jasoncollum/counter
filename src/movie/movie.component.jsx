// useEffect
import React, { useState, useEffect } from 'react';

function Movie() {
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState('');

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://swapi.co/api/films/${number}/`)
                .then(res => res.json());
            setMovie(response);
        }
        getData();
    }, [number]);

    return (
        <div className='movie-container'>
            <h1>{movie.title}</h1>
            <p>{movie.opening_crawl}</p>
            <h4>Select a number...</h4>
            <select value={number} onChange={(e) => setNumber(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>
        </div>
    )
}

export default Movie;