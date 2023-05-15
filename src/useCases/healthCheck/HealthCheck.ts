import { HealthCheckResponse, HealthCheck } from './HealthCheckInterface'

class AppHealthCheck implements HealthCheck {
  checkHealth(): HealthCheckResponse {
    const status = 'UP'
    const version = '1.0.0'
    const uptime = process.uptime()

    return { status, version, uptime }
  }
}

export { AppHealthCheck }
