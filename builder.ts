interface Builder {
    reset(): void;
    setSeats(seats: number): void;
    setEngine(): void;
    setTripComputer(haveTripComputer: boolean): void;
    setGPS(haveGPS: boolean): void;
}

class CarBuilder implements Builder {
    private car!: Car;

    public reset(): void {
        this.car = new Car();
    }

    public setSeats(seats: number): void {
        this.car.seats = seats;
    }

    public setEngine(): void {
        
    }

    public setTripComputer(haveTripComputer: boolean): void {
        this.car.tripComputer = haveTripComputer;
    }

    public setGPS(haveGPS: boolean): void {
        this.car.gps = haveGPS;
    }

    public getCar(): Car {
        const result = this.car;
        this.reset();
        return result;
    }
}

class Car {
    public seats!: number;
    public tripComputer!: boolean;
    public gps!: boolean;
}

class Director {
    private builder!: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public makeSUV() {
        this.builder.reset();
        this.builder.setSeats(5);
        this.builder.setEngine();
        this.builder.setTripComputer(true);
        this.builder.setGPS(true);
    }

    public makeSportsCar() {
        this.builder.reset();
        this.builder.setSeats(2);
        this.builder.setEngine();
        this.builder.setTripComputer(true);
        this.builder.setGPS(true);
    }
}

const director = new Director();
const builder = new CarBuilder();
director.setBuilder(builder);

// Sport car
director.makeSportsCar();
console.log(builder.getCar());

// SUV
director.makeSUV();
console.log(builder.getCar());

// Custom
builder.setSeats(4);
builder.setTripComputer(true);
builder.setGPS(false);
console.log(builder.getCar());