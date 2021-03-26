import express from 'express'

import {indexPage} from '../conrollers/index'
import {allMoviesAPI} from '../conrollers/movies'

let router = express.Router()

export function configureRoutes(app){
    router.get('/', indexPage)
    router.get('/about', indexPage)
    router.get('/movies*', indexPage)
    router.get('/api/movies', allMoviesAPI)
    app.use('/', router)
}