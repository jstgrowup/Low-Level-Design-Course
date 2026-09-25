/*
Dynamic Polymorphism in real life says that 2 Objects coming from same
family will respond to same stimulus differently. Like in real world Manual
car and Electric car will respond to accelerate() differently.

To represent this in programming, we create a parent class that defines all
characters and behaviours that are generic to all child classes and are also same in
all child classes but make those methods abstract that are generic to all
child classes but all child class will behave differently. Then those child class
will provide implementation details of these abstract methods the way they want.
*/
abstract class Car {
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

    // Common methods for all cars.
    startEngine(): void {
        this.isEngineOn = true;
        console.log(`${this.brand} ${this.model} : Engine started.`);
    }

    stopEngine(): void {
        this.isEngineOn = false;
        this.currentSpeed = 0;
        console.log(`${this.brand} ${this.model} : Engine turned off.`);
    }

    // Abstract methods for dynamic polymorphism
    abstract accelerate(): void;
    abstract brake(): void;
}

class ManualCar extends Car {
    private currentGear: number;

    constructor(brand: string, model: string) {
        super(brand, model);
        this.currentGear = 0;
    }

    // Specialized method for Manual Car
    shiftGear(gear: number): void {
        this.currentGear = gear;
        console.log(`${this.brand} ${this.model} : Shifted to gear ${this.currentGear}`);
    }

    // Overriding accelerate - Dynamic Polymorphism
    accelerate(): void {
        if (!this.isEngineOn) {
            console.log(`${this.brand} ${this.model} : Cannot accelerate! Engine is off.`);
            return;
        }
        this.currentSpeed += 20;
        console.log(`${this.brand} ${this.model} : Accelerating to ${this.currentSpeed} km/h`);
    }

    // Overriding brake - Dynamic Polymorphism
    brake(): void {
        this.currentSpeed -= 20;
        if (this.currentSpeed < 0) this.currentSpeed = 0;
        console.log(`${this.brand} ${this.model} : Braking! Speed is now ${this.currentSpeed} km/h`);
    }
}

class ElectricCar extends Car {
    private batteryLevel: number;

    constructor(brand: string, model: string) {
        super(brand, model);
        this.batteryLevel = 100;
    }

    // Specialized method for Electric Car
    chargeBattery(): void {
        this.batteryLevel = 100;
        console.log(`${this.brand} ${this.model} : Battery fully charged!`);
    }

    // Overriding accelerate - Dynamic Polymorphism
    accelerate(): void {
        if (!this.isEngineOn) {
            console.log(`${this.brand} ${this.model} : Cannot accelerate! Engine is off.`);
            return;
        }
        if (this.batteryLevel <= 0) {
            console.log(`${this.brand} ${this.model} : Battery dead! Cannot accelerate.`);
            return;
        }
        this.batteryLevel -= 10;
        this.currentSpeed += 15;
        console.log(`${this.brand} ${this.model} : Accelerating to ${this.currentSpeed} km/h. Battery at ${this.batteryLevel}%.`);
    }

    // Overriding brake - Dynamic Polymorphism
    brake(): void {
        this.currentSpeed -= 15;
        if (this.currentSpeed < 0) this.currentSpeed = 0;
        console.log(`${this.brand} ${this.model} : Regenerative braking! Speed is now ${this.currentSpeed} km/h. Battery at ${this.batteryLevel}%.`);
    }
}

function main(): void {
    const myManualCar: Car = new ManualCar("Suzuki", "WagonR");
    myManualCar.startEngine();
    myManualCar.accelerate();
    myManualCar.accelerate();
    myManualCar.brake();
    myManualCar.stopEngine();

    console.log("----------------------");

    const myElectricCar: Car = new ElectricCar("Tesla", "Model S");
    myElectricCar.startEngine();
    myElectricCar.accelerate();
    myElectricCar.accelerate();
    myElectricCar.brake();
    myElectricCar.stopEngine();
}

main();
