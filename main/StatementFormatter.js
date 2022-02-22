class StatementFormatter {

  formatFullStatement(data) {
    let output = this.#formatTableHeader()
    data.reverse().forEach(transaction => {
      output += '\n' + this.#formatDate(transaction.date) + ' || '
      output += transaction.amount.toFixed(2) + ' || || '
      output += this.#formatNumber(transaction.balance)
      });
    return output
  }

  #formatTableHeader() {
    return 'date || credit || debit || balance'
  }

  #formatDate(date) {
    return date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear()
  }

  #formatNumber(number) {
    return number.toFixed(2)
  }
}

module.exports = StatementFormatter;