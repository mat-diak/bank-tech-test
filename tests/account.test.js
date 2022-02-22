const Account = require("../main/account.js");
const Statement = require("../main/statement.js");
jest.mock("../main/statement.js");

describe("Account", () => {
  let account;
  beforeEach(() => {
    account = new Account();
  });

  describe("when initialised", () => {
    it("creates a Statement", () => {
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
      expect(statement.saveTransaction).toHaveBeenCalledWith("deposit", 1000, 1000);
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
      acc.withdraw(999);
      expect(statement.saveTransaction).toHaveBeenCalledWith("withdrawal", 999, -999);
    });
  });
});
