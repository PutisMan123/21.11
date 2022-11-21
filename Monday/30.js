class User {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Employe extends User {
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}

let employe = new Employe;

employe.setName('Bredin');
employe.setSalary(100000000000000000000000000000);

let name = employe.getName();
let salary = employe.getSalary();

console.log(name);
console.log(salary);