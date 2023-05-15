import { Request, Response } from 'express'
import { Controller, HealthCheck } from './HealthCheckInterface'

export class HealthCheckController implements Controller {
  private readonly healthCheck: HealthCheck

  constructor(healthCheck: HealthCheck) {
    this.healthCheck = healthCheck
  }

  handle(req: Request, res: Response): void {
    const response = this.healthCheck.checkHealth()

    res.status(200).json(response)
  }
}
