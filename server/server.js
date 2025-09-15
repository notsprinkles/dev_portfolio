import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors({ origin: '*' })); 
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio-tracker';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const Event = mongoose.model('Event', new mongoose.Schema({
  type: String,
  page: String,
  visitorId: String,
  meta: Object,
  createdAt: { type: Date, default: Date.now }
}));

app.post('/api/events', async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save event', details: err.message });
  }
});

app.get('/api/events', async (req, res) => {
  const items = await Event.find().sort({ createdAt: -1 }).limit(50);
  res.json(items);
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
