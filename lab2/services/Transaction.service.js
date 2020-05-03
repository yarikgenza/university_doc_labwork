class TransactionService {
  constructor(Repository) {
    this.Repository = Repository;
  }

  async loadDataFromCSV() {
    const { Repository } = this;
    const entries = await Repository.readFromFile();
    const creationalPromises = entries.map(entry => Repository.createOne(entry));

    try {
      await Promise.all(creationalPromises);
      console.log('Done');
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = TransactionService;
