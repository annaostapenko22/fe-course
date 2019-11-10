const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  count: 0,

  //    * Метод отвечающий за добавление суммы к балансу
  //    * Создает объект транзакции и вызывает addTransaction
  deposit(amount) {
    this.balance += amount;
    this.count++;
    const transaction = {
      id: this.count + 1,
      type: Transaction.DEPOSIT,
      amount
    };
    this.addTransaction(transaction);
    console.log(`Внесено: `, amount);
  },
  //    * Если amount больше чем текущий баланс, выводи сообщение
  //    * о том, что снятие такой суммы не возможно, недостаточно средств.
  //    */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Недостаточно средств!`);
    } else {
      this.balance -= amount;
      this.count++;
      const transaction = {
        id: this.count + 1,
        type: Transaction.WITHDRAW,
        amount: amount
      };
      this.addTransaction(transaction);
      console.log(`Снято:`, amount);
    }
  },
  //    * Метод добавляющий транзацию в свойство transactions
  //    * Принимает объект трназкции
  //    */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },
  //    * Метод возвращает текущий баланс
  //    */
  getBalance() {
    console.log(`Баланс на вашем счету:`, this.balance);
    return this.balance;
  },
  //    * Метод ищет и возвращает объект транзации по id
  //    */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].id === id) {
        console.log(`Транзакция которую искали: `, this.transactions[i]);
        return this.transactions[i];
      }
    }
  },
  //    * Метод возвращает количество средств
  //    * определенного типа транзакции из всей истории транзакций
  //    */
  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === type) {
        total += this.transactions[i].amount;
        console.log(`Количество средств:`, total);
      }
    }
    return total;
  }
};

//  * Каждая транзакция это объект со свойствами: id, type и amount
account.getBalance();
account.deposit(500);
account.withdraw(50);
account.getBalance();
account.deposit(400);
account.withdraw(2000);
account.deposit(500);
account.getBalance();
account.deposit(100);
account.deposit(500);
account.withdraw(200);
account.getBalance();
account.getTransactionDetails(3);
console.log(
  `Общее количество внесенных денег: `,
  account.getTransactionTotal("deposit")
);
console.log(
  `Общее количество снятых денег:`,
  account.getTransactionTotal("withdraw")
);
