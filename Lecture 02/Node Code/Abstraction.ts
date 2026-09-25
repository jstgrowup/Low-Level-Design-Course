/*
Car Interface --> Act as an interface for the outside world to operate the car.
This interface tells 'WHAT' all it can do rather than 'HOW' it does that.
Since this is an interface we cannot directly create Objects of this. We
need to implement it first and then that child class will have the responsibility to
provide implementation details of all the methods in the interface.

In our real world example of Car, imagine you sitting in the car and able to operate
the car (startEngine, accelerate, brake, turn) just by pressing or moving some
pedals/buttons/steering wheel etc. You dont need to know how these things work, and
also they are hidden under the hood.
This Interface 'Car' denotes that (pedals/buttons/steering wheel etc).
*/
interface Car {
    startEngine(): void;
    shiftGear(gear: number): void;
    accelerate(): void;
    brake(): void;
    stopEngine(): void;
}

/*
This is a Concrete class (A class that provide implementation details of an interface/abstract class).
Now anyone can make an Object of 'SportsCar' and can assign it to 'Car' reference.
(See main method for this)

In our real world example of Car, as you cannot have a real car by just having its body only
(all these buttons or pedals). You need to have the actual implementation of 'What' happens
when we press these buttons. 'SportsCar' class denotes that actual implementation.

Hence we can conclude, to denote a real world car in programming we created 2 classes.
One to denote all the user-interface like pedals, buttons, steering wheels etc ('Car' interface).
And another one to denote the actual car with all the implementations of these buttons ('SportsCar' class).
*/
class SportsCar implements Car {
    brand: string;
    model: string;
    isEngineOn: boolean = false;
    currentSpeed: number = 0;
    currentGear: number = 0;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    startEngine(): void {
        this.isEngineOn = true;
        console.log(`${this.brand} ${this.model} : Engine starts with a roar!`);
    }

    shiftGear(gear: number): void {
        if (!this.isEngineOn) {
            console.log(`${this.brand} ${this.model} : Engine is off! Cannot Shift Gear.`);
            return;
        }
        this.currentGear = gear;
        console.log(`${this.brand} ${this.model} : Shifted to gear ${this.currentGear}`);
    }

    accelerate(): void {
        if (!this.isEngineOn) {
            console.log(`${this.brand} ${this.model} : Engine is off! Cannot accelerate.`);
            return;
        }
        this.currentSpeed += 20;
        console.log(`${this.brand} ${this.model} : Accelerating to ${this.currentSpeed} km/h`);
    }

    brake(): void {
        this.currentSpeed -= 20;
        if (this.currentSpeed < 0) this.currentSpeed = 0;
        console.log(`${this.brand} ${this.model} : Braking! Speed is now ${this.currentSpeed} km/h`);
    }

    stopEngine(): void {
        this.isEngineOn = false;
        this.currentGear = 0;
        this.currentSpeed = 0;
        console.log(`${this.brand} ${this.model} : Engine turned off.`);
    }
}

// Main Method
function main(): void {
    const myCar: Car = new SportsCar("Ford", "Mustang");

    myCar.startEngine();
    myCar.shiftGear(1);
    myCar.accelerate();
    myCar.shiftGear(2);
    myCar.accelerate();
    myCar.brake();
    myCar.stopEngine();
}

main();
