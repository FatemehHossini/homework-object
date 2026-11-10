let grades = {
    math: 18,
    physics: 9,
    programming: 20,
    database: 14,
    english: 7
};

for (let subject in grades) {

    if (grades[subject] < 10) {
        console.log(subject, "Failed");
    }
    else if (grades[subject] <= 15) {
        console.log(subject, "Average");
    }
    else {
        console.log(subject, "Excellent");
    }

}