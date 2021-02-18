import React from 'react'
import MovieList from './MovieList'
import StarRating from './Stars'
import {BrowserRouter as Router} from 'react-router-dom'

export default function Main() {
        return (
            <Router>
            <meta charset="utf-8"/>
            <div className="container">
            <header>
              <h1>Top 10 Movies: Natalie Stout</h1>
            </header>
            <MovieList/>
            </div>
            <footer>&copy; All rights reserved</footer>
            </Router>
        )
}
