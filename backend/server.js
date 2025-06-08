const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

const Quote = require('./quote');

app.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

app.post('/api/quotes', async (req, res) => {
  const { text, author } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Quote text is required' });
  }
  const newQuote = new Quote({
    text,
    author: author || 'Unknown'   // <-- default author to 'Unknown'
  });
  try {
    await newQuote.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save quote' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
