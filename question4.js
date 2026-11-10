let products = {
    bread: 25000,
    milk: 45000,
    cheese: 180000,
    rice: 950000,
    oil: 220000
};

let expensiveCount = 0;

for (let product in products) {

    if (products[product] < 50000) {
        console.log(product, "Cheap");
    }

    if (products[product] > 500000) {
        console.log(product, "Expensive");
        expensiveCount++;
    }
}

console.log("Number of expensive products:", expensiveCount);