const StatementFormatter = require("../main/statementformatter.js");

describe("StatementFormatter", () => {
  describe("formatStatement", () => {
    it("returns formatted deposit", () => {
      const statementFormatter = new StatementFormatter();
      const data = [
        {
          date: new Date("10 Jan 2023"),
          type: "credit",
          amount: 1000,
          balance: 1000,
        },
      ];

      expect(statementFormatter.formatFullStatement(data)).toEqual(
        "date || credit || debit || balance\n10/01/2023 || 1000.00 ||  || 1000.00"
      );
    });

    it("returns formatted withdrawal and deposit", () => {
      const statementFormatter = new StatementFormatter();
      const data = [
        {
          date: new Date("10 Jan 2023"),
          type: "debit",
          amount: 999,
          balance: 1,
        },
        {
          date: new Date("10 Jan 2023"),
          type: "credit",
          amount: 1000,
          balance: 1000,
        },
      ];

      expect(statementFormatter.formatFullStatement(data)).toEqual(
        "date || credit || debit || balance\n10/01/2023 || 1000.00 ||  || 1000.00\n10/01/2023 ||  || 999.00 || 1.00"
      );
    });
  });
});
