import { Router } from 'express'
import { createFomentoController } from './useCases/createFomento'

const router = Router()

router.post('/fund', (req, res) => {
  return createFomentoController.handle(req, res)
})

router.get('/health', (_req, res) => {
  return res.status(200).json('the Application is healthy')
})

export { router }
