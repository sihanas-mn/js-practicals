let employee = [
  {
    name: "aski",
    age: 21,
    activeStatus: "active",
    salary: 60000,
  },
  {
    name: "abc",
    age: 25,
    activeStatus: "active",
    salary: 50000,
  },
  {
    name: "xyz",
    age: 22,
    activeStatus: "inactive",
    salary: 45000,
  },
  {
    name: "batman",
    age: 30,
    activeStatus: "active",
    salary: 47000,
  },
];

let totalExpenses = 0

for (a of employee) {
    if (a.activeStatus === "active") {
        totalExpenses += a.salary
        console.log(`active employee details: ${a}`)
    }
}

console.log(`total expense: ${totalExpenses}`)