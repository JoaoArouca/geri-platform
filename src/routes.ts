import { Router } from 'express'
import { createFomentoController } from './useCases/createFomento'
import { healthCheckController } from './useCases/healthCheck'

const router = Router()

router.post('/fund', (req, res) => {
  return createFomentoController.handle(req, res)
})

router.get('/health', (req, res) => {
  return healthCheckController.handle(req, res)
})

export { router }
