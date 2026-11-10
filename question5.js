let users = {
    ali: {
        name: "Ali",
        balance: 250000,
        isActive: true
    },
    sara: {
        name: "Sara",
        balance: 80000,
        isActive: true
    },
    reza: {
        name: "Reza",
        balance: 150000,
        isActive: false
    },
    mina: {
        name: "Mina",
        balance: 400000,
        isActive: true
    }
};

for (let username in users) {

    if (users[username].isActive === true) {
        users[username].balance += 100000;
        console.log(users[username].name, "Received a gift");
    }
    else {
        console.log(users[username].name, "Did not receive a gift");
    }
}

console.log(users);