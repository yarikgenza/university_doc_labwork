const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

const TransactionController = require('./controllers/Transaction.controller');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const connectToDb = () => new Promise((resolve) => {
  mongoose.connect('mongodb://127.0.0.1:27017/online-banking',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('Connected to DB'); resolve() }
  );
});

// Define index route
app.get('/', TransactionController.index);

const start = async () => {
  await connectToDb();
  app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
  })
}

start();


