const { Schema } = require('mongoose');

const modelName = 'Transaction';

module.exports = (mongoose) => {
  const schema = new Schema({
      id: {
        type: Number,
      },
      from: Number,
      to: Number,
      amount: String,
      currency: String,
      date: String,
    }, {
      timestamps: true,
    });

  return mongoose.model(modelName, schema);
};
