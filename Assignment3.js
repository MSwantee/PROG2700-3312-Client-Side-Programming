let studentName = "Alex Johnson"; 
let age = 19;
const program = "IT Programming";
let completedAssignments = 3;
let isLoggedIn = true;
const totalAssignments = 5;

console.log(`Data check: studentName is a ${typeof studentName}`);
if (studentName === "") {
    console.log("Error: Student name cannot be empty.");
}
if (age < 18) {
    console.log("Access denied: Student must be 18 or older");
} else {
    console.log("Access granted");
}
if (!isLoggedIn) {
    console.log("Please log in to continue");
}

switch (program) {
    case "IT Programming":
        console.log("Welcome to the IT Programming program");
        break;
    case "Networking":
        console.log("Welcome to the Networking program");
        break;
    case "Cybersecurity":
        console.log("Welcome to the Cybersecurity program");
        break;
    default:
        console.log("Program not recognized");
}

console.log("Assignment Progress");
for (let i = 1; i <= completedAssignments; i++) {
    console.log("Assignment " + i + " completed");
}

let remaining = totalAssignments - completedAssignments;
while (remaining > 0) {
    console.log("Remaining assignments: " + remaining);
    remaining--;
}

function displaySummary(name, program) {
    console.log("Student Summary");
    console.log("Student Name: " + name);
    console.log("Program: " + program);
}

function calculateProgress(completed, total) {
    return (completed / total) * 100;
}

displaySummary(studentName, program);
let progress = calculateProgress(completedAssignments, totalAssignments);
console.log("Progress: " + progress + "%");

const hasPassed = (completed) => completed >= 3;

if (hasPassed(completedAssignments)) {
    console.log("Status: Passed");
} else {
    console.log("Status: Not Passed");
}