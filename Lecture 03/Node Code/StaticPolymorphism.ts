/*
Static Polymorphism (Compile-time polymorphism) in real life says that
the same action can behave differently depending on the input parameters.
For example, a Manual car can accelerate by a fixed amount or by a
specific amount you request. In programming, we achieve this via method
overloading: multiple method signatures with the same name but different
parameters, resolved at compile time. TypeScript expresses this with
overload signatures backed by a single implementation.
*/

class ManualCar {
    private brand: string;
    private model: string;
    private isEngineOn: boolean;
    private currentSpeed: number;
    private currentGear: number;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.isEngineOn = false;
        this.currentSpeed = 0;
        this.currentGear = 0;
    }

    startEngine(): void {
        this.isEngineOn = true;
        console.log(`${this.brand} ${this.model} : Engine started.`);
    }

    stopEngine(): void {
        this.isEngineOn = false;
        this.currentSpeed = 0;
        console.log(`${this.brand} ${this.model} : Engine turned off.`);
    }

    // Overloading accelerate - Static Polymorphism
    accelerate(): void;
    accelerate(speed: number): void;
    accelerate(speed?: number): void {
        if (!this.isEngineOn) {
            console.log(`${this.brand} ${this.model} : Cannot accelerate! Engine is off.`);
            return;
        }
        this.currentSpeed += speed ?? 20;
        console.log(`${this.brand} ${this.model} : Accelerating to ${this.currentSpeed} km/h`);
    }

    brake(): void {
        this.currentSpeed -= 20;
        if (this.currentSpeed < 0) {
            this.currentSpeed = 0;
        }
        console.log(`${this.brand} ${this.model} : Braking! Speed is now ${this.currentSpeed} km/h`);
    }

    shiftGear(gear: number): void {
        this.currentGear = gear;
        console.log(`${this.brand} ${this.model} : Shifted to gear ${this.currentGear}`);
    }
}

function main(): void {
    const myManualCar = new ManualCar("Suzuki", "WagonR");
    myManualCar.startEngine();
    myManualCar.accelerate();
    myManualCar.accelerate(40);
    myManualCar.brake();
    myManualCar.stopEngine();
}

main();
