# Bank tech test

## Before running:

```
yarn install
```

## To run (from project root dir):

```
node -i -e "$(< index.js)"
```

## Running tests:

```
yarn test
```

## Demo:

---

```js
➜  bank-tech-test git:(main) ✗ node -i -e "$(< index.js)"
Welcome to Node.js v17.4.0.
Type ".help" for more information.
> acc = new Account();
Account {
  balance: 0,
  statement: Statement {
    transactionHistory: [],
    statementFormatter: StatementFormatter {}
  }
}
> acc.deposit(100)
undefined
> acc.withdraw(70)
undefined
> acc.withdraw(20)
undefined
> acc.statement.print();
date || credit || debit || balance
22/02/2022 ||  || 20.00 || 10.00
22/02/2022 ||  || 70.00 || 30.00
22/02/2022 || 100.00 ||  || 100.00
undefined
>
```

## Features:

---

- money can be deposited and withdrew from the account
- each transaction is saved and timestamped
- full account statement can be printed

## Approach:

I started off with drafing the ideas for the classes and their responsibilites. I started with describing the Account class and added the functions to withdraw and deposit money. Secondly, I created a Statement class that stores all transaction data and formats the incoming data from Account class. StatementFormatter is resposible for producing a table for the statement. I tried to write the code, in such way, that it allows for future changes. The formatting should be relatively easy to change.

---

The responsibilities are split between 3 classes:

- Account - account operations
- Statement - formats the data and adds timestamps, stores transaction history
- StatementFormatter - produces a table representation of the statement

The decision to structure the script, in such way, was to have a clear purpose for each component. It also accommodates for adding further functionality.

### Further extensions:

- The validators which are now part of the Account class could be extracted to a separate class
- An interface class could be introduced to operate all the classes

## Edge cases considered:

---

- cannot withdraw when balance insufficient
- withdraw and deposit should only accept positive numbers
