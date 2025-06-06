import express from 'express';
import cors from 'cors'
// import './birds.js'
import authRoutes from './routes/auth.js'
import notesRoutes from './routes/notes.js'
import homeRoutes from './routes/home.js'
import resourcesRoutes from './routes/resources.js';
// import mongoose from 'mongoose';
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import User from './models/User.js'
import e from 'express';

dotenv.config();
const app = express();

connectDB();

// const hostname = '127.0.0.1';
const port = 3000;

//Middleware
app.use(cors())
app.use(express.json())

//routes
app.use('/api/auth', authRoutes)
app.use('/api/notes', notesRoutes)
app.use('/api/home', homeRoutes)
app.use('/api/resources', resourcesRoutes);

app.get('/', (req, res) => {
    res.send('API is running...  ')
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Password does not match")
            } 
        }else{
            res.json("No record existed")
        }
    })
})

app.post('/signup', (req, res) => {
    User.create(req.body)
    .then(user => res.json(User))
    .catch(err => res.json(err));
    console.log(req.body)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})