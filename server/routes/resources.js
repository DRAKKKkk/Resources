import express from 'express';
import Resource from '../models/Resource.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { name } = req.query;
  if (name) {
    const resource = await Resource.findOne({ title: name });
    return res.json(resource);
  }
  const resources = await Resource.find();
  res.json(resources);
});

router.post('/', async (req, res) => {
    try{
  const { title } = req.body;
  if(!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const resource = new Resource({ title });
  await resource.save();
  res.json(resource);
} catch(err){
  res.status(500).json({ error: err.message });
}
});

export default router;