import { Account } from '../main/account.js'

describe('Account', () => {
  describe('getBalance', () => {
    describe('when initialised', () => {
      it('returns 0', () => {
        const account = new Account();
        expect(account.getBalance()).toEqual(0)
      })
    })
  })
});