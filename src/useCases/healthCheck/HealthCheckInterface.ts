import { Request, Response } from 'express'

export interface HealthCheckResponse {
  status: string
  version: string
  uptime: number
}

export interface HealthCheck {
  checkHealth(): HealthCheckResponse
}

export interface Controller {
  handle(req: Request, res: Response): void
}
