import express from 'express'
import { portFakeAPI } from './env.js'

const app = express()
app.use(express.json())


app.get('/', (request, response) => {
  response.send('hello')
})

app.get('/posts', (request, response) => {
  const result = [
    {
      id: 'test_id',
      title: 'test title',
      description: 'test description',
      body: 'test body',
    }
  ]
  setTimeout(() => response.status(200).json(result), 1000)
})
app.get('/products', (request, response) => {
  const result = [
    {
      id: 'test_id',
      title: 'test title',
      description: 'test description',
      body: 'test body',
    }
  ]
  setTimeout(() => response.status(200).json(result), 1000)
})

function handleInit() {
  console.log(`server has been started on http://localhost:${ portFakeAPI }/`)
}

app.listen(portFakeAPI, handleInit)
