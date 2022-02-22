const Account = require("../main/account.js");
const Statement = require("../main/statement.js");
const StatementFormatter = require("../main/statementformatter.js");
jest.mock("../main/statementformatter.js");

describe("Statement", () => {
  let statement;
  beforeEach(() => {
    statement = new Statement();
  });

  describe("when initialised", () => {
    it("instantiates StatementFormatter", () => {
      expect(StatementFormatter).toHaveBeenCalledTimes(1);
    });
  });

  describe("saveTransaction", () => {
    it("saves a transaction", () => {
      jest.useFakeTimers("modern");
      jest.setSystemTime(new Date(2022, 0, 1));

      statement.saveTransaction("transaction type", 500, 500);

      expect(statement.getTransactionHistory()).toContainEqual({
        date: new Date(),
        type: "transaction type",
        amount: 500,
        balance: 500,
      });
    });
  });

  describe("print", () => {
    it("returns the statement", () => {
      const stFormatter = new StatementFormatter();
      const st = new Statement(stFormatter);

      const consoleSpy = jest.spyOn(console, "log");
      st.print();

      expect(stFormatter.formatFullStatement).toHaveBeenCalledWith(
        st.transactionHistory
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        stFormatter.formatFullStatement()
      );
    });
  });
});
