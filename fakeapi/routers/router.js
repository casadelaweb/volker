import Router from 'express'

const router = new Router()

router.post('/posts', (request, response) => {
    const posts = [
      {
        id: 'test_id',
        title: 'test title',
        description: 'test description',
        body: 'test body',
      }
    ]
    response.status(200).json(posts)
  }
)
router.get('/posts')
router.get('/posts/:id')
router.put('/posts/:id')
router.delete('/posts:id')

export default router
