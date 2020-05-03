const mongoose = require('mongoose');

const connectToDb = () => new Promise((resolve) => {
  mongoose.connect('mongodb://127.0.0.1:27017/online-banking',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('Connected to DB'); resolve() }
  );
});

const TransactionService = require('./services/Transaction.service');
const TransactionRepository = require('./repositories/Transaction.repository');

const transactionService = new TransactionService(
    new TransactionRepository(),
);

const start = async () => {
  await connectToDb();
  await transactionService.loadDataFromCSV();
  process.exit(0);
}

start();