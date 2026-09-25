// Account interface
interface Account {
    deposit(amount: number): void;
    withdraw(amount: number): void;
}

class SavingAccount implements Account {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount} in Savings Account. New Balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount} from Savings Account. New Balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds in Savings Account!");
        }
    }
}

class CurrentAccount implements Account {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount} in Current Account. New Balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount} from Current Account. New Balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds in Current Account!");
        }
    }
}

class FixedTermAccount implements Account {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount} in Fixed Term Account. New Balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        throw new Error("Withdrawal not allowed in Fixed Term Account!");
    }
}

class BankClient {
    private accounts: Account[];

    constructor(accounts: Account[]) {
        this.accounts = accounts;
    }

    processTransactions(): void {
        for (const acc of this.accounts) {
            acc.deposit(1000);

            // Checking account type explicitly
            if (acc instanceof FixedTermAccount) {
                console.log("Skipping withdrawal for Fixed Term Account.");
            } else {
                try {
                    acc.withdraw(500);
                } catch (e) {
                    console.log(`Exception: ${(e as Error).message}`);
                }
            }
        }
    }
}

function main(): void {
    const accounts: Account[] = [
        new SavingAccount(),
        new CurrentAccount(),
        new FixedTermAccount(),
    ];

    const client = new BankClient(accounts);
    client.processTransactions();
}

main();
