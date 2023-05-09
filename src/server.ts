import { app } from './app'
import dotenv from 'dotenv'

dotenv.config()

if (!process.env.PORT) {
  throw new Error('PORT not found in .env')
}

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`)
})
