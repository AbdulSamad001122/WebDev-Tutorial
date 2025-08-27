class Bank_Account {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  get_balance() {
    return "$" + this.#balance;
  }
}

const account = new Bank_Account();
account.deposit(100);

console.log(account.get_balance());
// console.log(account.#balance);
