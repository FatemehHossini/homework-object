let order = {
    customer: "Sara",
    totalPrice: 780000,
    isMember: true
};

let shippingCost;

if (order.totalPrice > 1000000 || order.isMember === true) {
    shippingCost = 0;
} else {
    shippingCost = 50000;
}

console.log("Shipping cost:", shippingCost);  