class StatementFormatter {
  formatFullStatement(data) {
    let output = this.#formatTableHeader();
    data.reverse().forEach((transactionData) => {
      output += this.#formatRow(transactionData);
    });
    return output;
  }

  #formatTableHeader() {
    return "date || credit || debit || balance";
  }

  #formatDate(date) {
    return (
      date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear()
    );
  }

  #formatNumber(number) {
    return number.toFixed(2);
  }

  #formatRow(transactionData) {
    let output = "\n";
    output += this.#formatDate(transactionData.date) + " || ";
    output += this.#formatTransactionDetails(
      transactionData.type,
      transactionData.amount
    );
    output += this.#formatNumber(transactionData.balance);
    return output;
  }

  #formatTransactionDetails(type, amount) {
    if (type === "deposit") {
      return amount.toFixed(2) + " || || ";
    } else {
      return "|| " + amount.toFixed(2) + " || ";
    }
  }
}

module.exports = StatementFormatter;
