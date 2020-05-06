const { Schema } = require('mongoose');

const modelName = 'Transaction';

module.exports = (mongoose) => {
  const schema = new Schema({
      title: String,
      amount: Number,
    }, {
      timestamps: true,
    });

  return mongoose.model(modelName, schema);
};
