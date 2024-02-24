import express from 'express'
import { portFakeAPI } from './types/env.js'
import router from './routers/router.js'

const app = express()
app.use(express.json())
app.use('/', router)

function handleInit() {
  console.log(`server has been started on http://localhost:${ portFakeAPI }/`)
}

app.listen(portFakeAPI, handleInit)
