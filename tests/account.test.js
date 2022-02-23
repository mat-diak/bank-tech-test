const Account = require("../main/account.js");
const Statement = require("../main/statement.js");
const Validator = require("../main/validator.js");
jest.mock("../main/statement.js");
jest.mock("../main/validator.js");

describe("Account", () => {
  let account;
  beforeEach(() => {
    account = new Account();
  });

  describe("when initialised", () => {
    it("instantiates Statement", () => {
      expect(Statement).toHaveBeenCalledTimes(1);
    });
  });

  describe("deposit", () => {
    it("adds to balance", () => {
      account.deposit(1000);

      expect(account.getBalance()).toEqual(1000);
    });

    it("calls saveTransaction on Statement", () => {
      const statement = new Statement();
      const acc = new Account(statement);

      acc.deposit(1000);

      expect(statement.saveTransaction).toHaveBeenCalledWith(
        "credit",
        1000,
        1000
      );
    });

    it("validates input", () => {
      account.deposit(1000);
      expect(Validator.isValidInput).toHaveBeenCalledTimes(1);
    });
  });

  describe("withdraw", () => {
    it("substracts from balance", () => {
      account.deposit(500);
      account.withdraw(500);
      expect(account.getBalance()).toEqual(0);
    });

    it("calls saveTransaction on Statement", () => {
      const statement = new Statement();
      const acc = new Account(statement);

      acc.deposit(1000);
      acc.withdraw(999);

      expect(statement.saveTransaction).toHaveBeenCalledWith("debit", 999, 1);
    });

    it("validates input and sufficient funds", () => {
      account.withdraw(1000);

      expect(Validator.isValidInput).toHaveBeenCalledTimes(1);
      expect(Validator.hasSufficientFunds).toHaveBeenCalledTimes(1);
    });
  });
});
