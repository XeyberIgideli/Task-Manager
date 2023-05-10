import express from 'express'
import mongoose from 'mongoose'
import taskRoute from './routes/taskRoute.js'

const app = express()


// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) 
app.use(express.static('view'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',taskRoute)

app.listen(4000)