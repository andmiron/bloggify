// Common packages
const express = require("express");
const path = require('path')
const compression = require('compression')
const morgan = require('morgan')


// Initializing express app
const app = express();

// Importing routes
const viewRoutes = require('./routes/viewRoutes')
const authRoutes = require('./routes/authRoutes')
const blogRoutes = require('./routes/blogRoutes')

// Pug engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// Global middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(compression())
app.enable('trust proxy')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(express.json({limit: '10kb'}))
app.use(express.urlencoded({extended:true, limit: '10kb'}))

// Routes
app.use('/', viewRoutes)
app.use('/auth', authRoutes)
app.use('/api/blogs', blogRoutes)



module.exports = app;

