class Car {
    gas = 0
    company = "Not Defined";
    model = "Not Defined";
    year = "Not Specified";
    wheels = 4;
    kmPerLt = 13.5;
    color = "Not Specified";
    hybrid = false;
    tank = 0;
    kms = 0;
    ya

    constructor(props) {
        this.company = props['company'];
        this.color = props['color'];
        this.kmPerLt = props.kmPerLt;
        this.tank = props.tank;
        this.price = props.price;
        this.year = props.year;
    }

    tankCapacity() {
        return this.tank - this.gas;
    }

    addGas(liters) {
        if (liters > this.tankCapacity()) {
            this.gas = this.tank
        } else {
            this.gas += liters;
        }

    }

    currentGas() {
        return this.gas;
    }

    maxDistance() {
        return this.gas * this.kmPerLt
    }

    forward(kms) {
        this.maxDistance();
        if (kms > this.maxDistance()) {
            this.kms += this.maxDistance();
            this.gas -= this.maxDistance() / this.kmPerLt;
        } else {
            this.kms += kms;
            this.gas -= kms / this.kmPerLt;
        }
    }

}

module.exports = Car;

// Alex Israel Martinez
// Enroute Rockstars 6G