import { Account } from "../main/account.js";

describe("Account", () => {
  let account;
  beforeEach(() => {
    account = new Account();
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
  });

  describe('withdraw', () => {
    it('substracts from balance', () => {
      account.deposit(500)
      account.withdraw(500)
      expect(account.getBalance()).toEqual(0)
    });
  });
});
