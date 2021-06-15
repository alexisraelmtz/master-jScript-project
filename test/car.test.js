const Car = require("../app/cars.js");

const golf = new Car({
    color: "red",
    model: "Golf",
    year: new Date(2021),
    price: 449990,
    kmPerLt: 16.9,
    tank: 50,
    company: "VW"

});


test("Car current sale price is the same", () => {
    expect(golf.price).toBe(449990)
})

test("Car model to equal VW", () => {
    expect(golf.company).toBe("VW");
});

test("Car color equal to red", () => {
    expect(golf.color).toBe("red");
});

test("Car current gas to equal Zero", () => {
    expect(golf.currentGas()).toBe(0);
});

test("Adding gas to car", () => {
    expect(golf.tankCapacity()).toBeGreaterThanOrEqual(0);
    golf.addGas(80);
    expect(golf.currentGas()).toBeLessThanOrEqual(golf.tank);
});

test("Car Km per L to equal", () => {
    expect(golf.kmPerLt).toBe(16.9);
});


test("Move car 5km", () => {
    const kmBefore = golf.kms;
    golf.forward(5);
    expect(golf.kms).toBeGreaterThan(kmBefore);
});


test("Car current sale price is lower", () => {
    expect(golf.price).toBeLessThanOrEqual(449990);
});


// test("Move Car 5,000kms", () => {
//     const kmBefore = golf.kms;
//     golf.forward(5000);
//     expect(golf.currentGas()).toBeLessThanOrEqual(golf.tank);
//     expect(golf.currentGas()).toBe(0);
//     expect(golf.kms).toBeGreaterThan(kmBefore);
// });