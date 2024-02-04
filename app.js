const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://riteshkumarlsarai:K123Ritesh@samplecluster.r9c09jh.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

// Use the routes from the routes folder
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
