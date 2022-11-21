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
	setYear(year) {
		if(year > 18 && year < 65){
		  this.year = year;
		}else{
		  throw new Error('Почему так?');
		}
	}
	getYear() {
		return this.year;
	}
}

let employe = new Employe;

employe.setName('Bredin');
employe.setSalary(100000000000000000000000000000);
employe.setYear(24);

let name = employe.getName();
let salary = employe.getSalary();
let year = employe.getYear();

console.log(name);
console.log(salary);
console.log(year);