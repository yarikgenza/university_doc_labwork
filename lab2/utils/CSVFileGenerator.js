const fastcsv = require('fast-csv');
const fs = require('fs');

// Generate mock data
const transactions = [];

for (i = 0; i < 2000; i++) {
  transactions.push({
    id: i,
    from: (Math.random() * 10000000).toFixed(0),
    to: (Math.random() * 10000000).toFixed(0),
    amount: (Math.random() * 10000000).toFixed(0),
    currency: Math.random() > 0.5 ? 'USD' : 'UAH',
    date: new Date(Date.now()).toTimeString(),
  });
}

const ws = fs.createWriteStream("../data/transactions.csv");

fastcsv
  .write(transactions, { headers: true })
  .pipe(ws);

console.log('CSV file has been successfully generated');