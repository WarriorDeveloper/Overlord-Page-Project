import { Router } from 'express'
import { characters } from '../db/miDB.js'

import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

const routes = Router()

routes.get('/', (req, res) => {
    res.send({message: 'hola mundo'})
})

routes.get('/characters', (req, res) => {
    res.send({
        characters
    })
})

routes.get('/characters/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const characterResult = characters.find(character => character.id === id)
    if (characterResult === undefined){
        res.send({
            message: 'no se encontro'
        })
    } else {
        res.send({
            characterResult
        })
    }
})
/*
test
routes.get('/momonga', (req, res) => {
    const ruta = __dirname.replace('routes', 'public') 
    res.sendFile(ruta+'\\images\\overlord-1.jpg')
})
*/

export {routes}