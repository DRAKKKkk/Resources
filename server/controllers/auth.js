import express from 'express';
const router = express.Router();

router.post('/signup', async (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        return res.status(400).json({error: 'All fields are required'});
    }

    res.status(200).json({message: 'Signup successful'});
});

export default router;