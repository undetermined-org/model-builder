const Builder = require('../src/Builder');

describe('Builder', () => {
  describe('when creating an instance', () => {
    let test_options;
    let instance;

    beforeEach(() => {
      test_options = {
        orm:   'sequelize',
        model: {
          key: 'value'
        }
      };

      instance = new Builder(test_options);
    });

    it('should have a _model attribute', () => {
      expect(instance).to.have.property('_model');
    });

    it('should have an orm attribute', () => {
      expect(instance).to.have.property('orm');
    });

    it('should have a _fields attribute', () => {
      expect(instance).to.have.property('_fields');
    });

    it('should have add_field method', () => {
      expect(instance).to.have.property('add_field');
    });

    it('should throw an exception if model isn\'t specified', () => {
      delete test_options.model;

      expect(() => new Builder(test_options)).to.throw();
    });

    it('should throw an exception if orm isn\'t specified', () => {
      delete test_options.orm;

      expect(() => new Builder(test_options)).to.throw();
    });

    it('should throw an exception if both orm and model aren\'t specified', () => {
      expect(() => new Builder()).to.throw();
    });

    it('should throw an exception if orm isn\'t a string', () => {
      test_options.orm = 124;

      expect(() => new Builder(test_options)).to.throw();
    });

    it('should throw an exception if orm isn\'t supported', () => {
      test_options.orm = 'inexistent';

      expect(() => new Builder(test_options)).to.throw();
    });
  });
});
