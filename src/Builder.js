
const supported_orms = [
  'sequelize'
];

module.exports = class Builder {
  constructor ({ model, orm }) {
    if (!model) {
      throw new Error('You should provide the model!');
    }
    if (!orm) {
      throw new Error('You should provide the orm!');
    } else if (!supported_orms.includes(orm)) {
      throw new Error(`Unsupported orm: [${orm}]`);
    }

    this._model = model;
    this.orm = orm;
    this._fields = [];
  }

  add_field () {

  }
};
