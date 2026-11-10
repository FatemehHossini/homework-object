let student = {
    name: "Reza",
    attendance: 14,
    totalSessions: 16
};

if (student.attendance < 10) {
    console.log("Not allowed to take the exam");
}
else if (student.attendance === student.totalSessions) {
    console.log("Full attendance");
}
else {
    console.log("Allowed to take the exam");
}