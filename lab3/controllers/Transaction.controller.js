const mongoose = require('mongoose');
const Transaction = require('../models/Transaction.model')(mongoose);

const index = async (req, res) => {
  try {
    const { title, amount } = req.query;
     
    if (title, amount) {
      await Transaction.create({ title, amount });
      res.redirect('/');
      return;
    }

    const transactions = await Transaction.find().limit(10);
    res.render('transaction', { transactions });
  } catch (error) {
    console.error(error);
  }

  res.end('error');
}

module.exports = {
  index,
}