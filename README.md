## Before running:
___
```
yarn install
```

## To run (from project root dir):
___
```
node -i -e "$(< index.js)"  
```

## Running tests:
___
```
yarn test
```

## Demo:
___

```js
bank-tech-test git:(main) ✗ node -i -e "$(< index.js)"
Welcome to Node.js v17.4.0.
Type ".help" for more information.
> const acc = new Account();
undefined
> acc.statement.print();
date || credit || debit || balance
undefined
> acc.deposit(1000)
undefined
> acc.deposit(200)
undefined
> acc.withdraw(800)
undefined
> acc.statement.print();
date || credit || debit || balance
22/11/2022 || || 800.00 || 400.00
22/11/2022 || 200.00 || || 1200.00
22/11/2022 || 1000.00 || || 1000.00
undefined
```

## Features:
___

- money can be deposited and withdrew from the account
- each transaction is saved and timestamped
- full account statement can be printed

## Approach:
___

The responsibilities are split between 3 classes:
  - Account - resposible for account operations, i.e. withdrawals and deposits
  - Statement - slightly like a database, it formats the data and tracks the history of transactions, adds timestamps
  - StatementFormatter - given transactions history from Statement, produces a table for the statement

The decision to structure the script, in such way, was to have a clear purpose for each component. Such division allows for adding up to the project. An additional divison could be introduced by implementing an interface through which user could access all functionality. 

## Edge cases considered:
___

- cannot withdraw when balance insufficient
- withdraw and deposit should only accept positive numbers
