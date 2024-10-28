//complete this code
class Person {
	constuctor(name,age){
      this.name=name;
	  this.age=age;
	}
	
}

class Student extends Person {
	constuctor(name,age){
		super(name,age);
	}
get name(){
return this.name;
}
set age(newAge){
	this.age=newAge;
} 
study(){
return this.name+" is studying";
}
	
}

class Teacher extends Person {
	constuctor(name,age){
		super(name,age);
	}
	teach(){
      return this.name+" is teaching";
	}
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
