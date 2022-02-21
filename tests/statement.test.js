import { Statement } from "../main/statement.js";

describe("Statement", () => {
  let statement;
  beforeEach(() => {
    statement = new Statement();
  });

  describe("getHistory", () => {
    describe("when initialised", () => {
      it("has no data", () => {
        expect(statement.getHistory()).toEqual({});
      });
    });
  });
});
