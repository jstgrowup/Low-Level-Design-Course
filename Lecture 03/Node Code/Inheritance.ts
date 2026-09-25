/*
We know that real world Objects show inheritance relationship where we
have parent object and child object. child object have all the characters
or behaviours that parent have plus some additional characters/behaviours.
Like all cars in real world have a brand, model etc and can start, stop,
accelerate etc. But some specific cars like manual car have gear System
while other specific cars like Electric cars have battery system.

We represent this scenario of real world in programming by creating a parent class and
defining all the characters(fields) or behaviours(methods) that all cars
have in parent class. Then we create different child classes that inherits
from this parent class and define only those characters and behaviours
that are specific to them. Although objects of these child classes can
access or call parent class characters(fields) and behaviours(methods).
Hence providing code reusability.
*/
class Car {
    protected brand: string;
    protected model: string;
    protected isEngineOn: boolean;
    protected currentSpeed: number;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.isEngineOn = false;
        this.currentSpeed = 0;
    }

    // Common methods for all cars
    startEngine(): void {
        this.isEngineOn = true;
        console.log(`${this.brand} ${this.model} : Engine started.`);
    }

    stopEngine(): void {
        this.isEngineOn = false;
        this.currentSpeed = 0;
        console.log(`${this.brand} ${this.model} : Engine turned off.`);
    }

    accelerate(): void {
        if (!this.isEngineOn) {
            console.log(`${this.brand} ${this.model} : Cannot accelerate! Engine is off.`);
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
}

class ManualCar extends Car { // Inherits from Car

    private currentGear: number; // specific to Manual Car.

    constructor(brand: string, model: string) {
        super(brand, model);
        this.currentGear = 0;
    }

    // Specialized method for Manual Car
    shiftGear(gear: number): void {
        this.currentGear = gear;
        console.log(`${this.brand} ${this.model} : Shifted to gear ${this.currentGear}`);
    }
}

class ElectricCar extends Car { // Inherits from Car

    private batteryLevel: number; // specific to Electric Car.

    constructor(brand: string, model: string) {
        super(brand, model);
        this.batteryLevel = 100;
    }

    // Specialized method for Electric Car
    chargeBattery(): void {
        this.batteryLevel = 100;
        console.log(`${this.brand} ${this.model} : Battery fully charged!`);
    }
}

// Main
function main(): void {
    const myManualCar = new ManualCar("Suzuki", "WagonR");
    myManualCar.startEngine();
    myManualCar.shiftGear(1); // Specific to Manual Car
    myManualCar.accelerate();
    myManualCar.brake();
    myManualCar.stopEngine();

    console.log("----------------------");

    const myElectricCar = new ElectricCar("Tesla", "Model S");
    myElectricCar.chargeBattery(); // Specific to Electric Car
    myElectricCar.startEngine();
    myElectricCar.accelerate();
    myElectricCar.brake();
    myElectricCar.stopEngine();
}

main();
