//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
}

class Student extends Person {
	super(name,age)
 get name(){
	name="Vamsi";
 }
set age(){
	age=21;
}
 study(){
  console.log(name+" is studying");
 }
}

class Teacher extends Person {
	super(name,age)
teach(){
console.log(name+" is teaching");
}
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
