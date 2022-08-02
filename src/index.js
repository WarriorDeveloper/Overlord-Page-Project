import express from 'express'
import { routes } from './routes/index.routes.js'
import cors from 'cors'

import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.set('port', 3000)

app.use(cors())
app.use(express.static(__dirname+"\\public"))
//console.log(__dirname+"\\public")
app.use(routes)

app.listen(app.get('port'), () => console.log(`servido en puerto ${app.get('port')}`))