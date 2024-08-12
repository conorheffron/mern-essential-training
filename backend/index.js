import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import cors from 'cors'
import routes from './routes/soccerRoutes'

const app = express()
const PORT = 4000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/soccerDB')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())

routes(app)

app.get('/', (req, res) => {
  res.send(`Our application is running on PORT ${PORT}`)
})

app.listen(PORT, () => {
  console.log(`Our soccer server is running on ${PORT}`)
})