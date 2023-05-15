import { AppHealthCheck } from './HealthCheck'
import { HealthCheckController } from './HealthCheckController'

const healthCheck = new AppHealthCheck()
const healthCheckController = new HealthCheckController(healthCheck)

export { healthCheckController }
