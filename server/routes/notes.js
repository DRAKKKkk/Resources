import express from 'express'
const router = express.Router();

router.get('/',(req,res) => {
    res.send('notes Home Page');
})

router.post('/',(req,res) => {
    res.send('notes Home Page');
})

router.put('/',(req,res) => {
    res.send('notes Home Page');
})

router.delete('/',(req,res) => {
    res.send('notes Home Page');
})

export default router