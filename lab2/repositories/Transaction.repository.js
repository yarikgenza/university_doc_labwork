const fs = require('fs');
const path = require('path');
const csv = require("fast-csv");

const mongoose = require('mongoose');
const TransactionModel = require('../models/Transaction.model')(mongoose);

class TransactionRepository {
  async readFromFile() {
    const readEntries = () => new Promise((resolve, reject) => {
      const items = [];
      fs.createReadStream(path.resolve(__dirname, '../data', 'transactions.csv'))
        .pipe(csv.parse({ headers: true }))
        .on('error', (error) => { console.error(error); reject(error); })
        .on('data', (row) => items.push(row))
        .on('end', (rowCount) => {
          console.log(`Parsed ${rowCount} rows`);
          resolve(items);
        });
    });

    try {
      const entries = await readEntries();
      return entries;
    } catch (error) {
      console.error(error);
    }
  }

  async createOne(entry) {
    await TransactionModel.create(entry);
  }
}

module.exports = TransactionRepository;
