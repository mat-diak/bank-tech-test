const Account = require("../main/account.js");
const Statement = require("../main/statement.js");
jest.mock("../main/statement.js");

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

  describe("getBalance", () => {
    describe("when initialised", () => {
      it("returns 0", () => {
        expect(account.getBalance()).toEqual(0);
      });
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

    describe('when given a negative integer', () => {
      it('throws an error', () => {
        expect(() => account.deposit(-100)).toThrow('Invalid input')
      });
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
      acc.deposit(1000)
      acc.withdraw(999);
      expect(statement.saveTransaction).toHaveBeenCalledWith(
        "debit",
        999,
        1
      );
    });

    describe('when given a string', () => {
      it('throws an error', () => {
        expect(() => account.withdraw('£100')).toThrow('Invalid input')
      });
    });

    describe('when insufficient balance', () => {
      it('throws an error', () => {
        account.deposit(1)
        expect(() => account.withdraw(2)).toThrow('Insufficient balance')
      });
    });
  });
});
