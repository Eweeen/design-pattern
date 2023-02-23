class Car {
    public maker: string;

    public constructor() {
        this.maker = "Peugeot";
    }

    public setMaker(newMaker: string) {
        this.maker = newMaker;
    }

    public clone(): this {
        const clone = Object.create(this);
        clone.maker = this.maker;
        return clone;
    }
}

const car1 = new Car();
const car2 = car1.clone();
car2.setMaker('BMW');

console.log(car1);
console.log(car2);
