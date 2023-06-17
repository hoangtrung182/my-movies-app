// import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import axios from 'axios';

const API_URL = 'http://www.omdbapi.com?apikey=8d197c02'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');

    const searchMovies = async (title) => {
        const res = await axios.get(`${API_URL}&s=${title}`);
        setMovies(res.data.Search);
    }

    useEffect(() => {
        searchMovies(title)
    }, [])
    
    return (
        <div className="app">
            <h1>Movies for everyone</h1>
            
            <div className="search">
                <input 
                    placeholder="Search for movies" 
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                     />
                <button className="btn-search" onClick={() => searchMovies(title)}>Search</button>
            </div>
            {
                movies?.length > 0      
                ? (
                    <div className="container">
                        {
                            movies.map((movie) => {
                                return <MovieCard {...movie} key={movie.imdbID} />
                            })   
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h3>Not found movies</h3>
                    </div>
                )
            }
        </div>
    )
}

export default App;