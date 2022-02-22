const Statement = require("../main/statement.js");

describe("Statement", () => {
  let statement;
  beforeEach(() => {
    statement = new Statement();
  });

  describe("getHistory", () => {
    describe("when initialised", () => {
      it("has no data", () => {
        expect(statement.getHistory()).toEqual([]);
      });
    });
  });

  describe("saveTransaction", () => {
    it("saves a withdrawal", () => {
      statement.saveTransaction('withdrawal', 500);
      expect(statement.getHistory()).toEqual([
        { type: "withdrawal", amount: 500 },
      ]);
    });
  });
});
