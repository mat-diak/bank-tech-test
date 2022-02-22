const Validator = require("../main/validator.js");

describe('Validator', () => {
  describe('isValid', () => {
    describe('when 0', () => {
      it('throws an error', () => {
        expect(() => Validator.isValidInput(0)).toThrow('Invalid input')
      });
    });

    describe('when string', () => {
      it('throws an error', () => {
        expect(() => Validator.isValidInput('£100')).toThrow('Invalid input')
      });
    });

    describe('when 1', () => {
      it('does not throw an error', () => {
        expect(() => Validator.isValidInput(1)).not.toThrow('Invalid input')
      });
    });
  });
  
  describe('hasSufficientFunds', () => {
    describe('when insufficient balance', () => {
      it('throws an error', () => {
        expect(() => Validator.hasSufficientFunds(500, 501)).toThrow('Insufficient balance')
      });
    });
  
    describe('when sufficient funds', () => {
      it('does not throw an error', () => {
        expect(() => Validator.hasSufficientFunds(500, 500)).not.toThrow('Insufficient balance')
      });
    });
  });
});