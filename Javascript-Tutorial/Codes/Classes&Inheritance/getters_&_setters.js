class Employee {
  #salary;

  constructor(name, salary) {
    this.name = name;

    if (salary < 0) throw new Error("Salary cannot be negative!");
    this.#salary = salary;
  }

  get salary() {
    console.log("👀 Getting salary...");
    return "You are not allowed to see salary!";
  }

  set salary(value) {
    if (value < 0) {
      console.log("❌ Invalid salary! Cannot be negative.");
    } else {
      this.#salary = value;
      console.log("✅ Salary updated successfully.");
    }
  }
}

// Test
const new_employee = new Employee("John", 50000);

console.log(new_employee.salary);  // 👀 + message

new_employee.salary = -10000;      // ❌ Invalid
new_employee.salary = 60000;       // ✅ Works
