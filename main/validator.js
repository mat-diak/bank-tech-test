class Validator {
  static isValidInput(input) {
    if (this.#isPositiveInteger(input)) {
      throw "Invalid input";
    }
  }
  
  static hasSufficientFunds(balance, amount) {
    if (amount > balance) {
      throw "Insufficient balance";
    }
  }

  static #isPositiveInteger(input) {
    return !Number.isInteger(input) || input < 1
  }

}

module.exports = Validator;