class Person {
    private id:number;
    private name:string;
    private gender:number;
    private salary:number;
    private department:string;

    constructor(id:number,name:string,gender:number,salary:number){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.salary = salary;
    }

    //setter
    setDepartment(dep:string):void{
        this.department = dep;
    }
    //getter
    getDepartment():string{
        return this.department;
    }

    display():void {
        console.log("ID:"+this.id);
        console.log("NAME:"+this.name);
        console.log("GENDER:"+this.gender);
        console.log("SALARY:"+this.salary);
    }

}

let p1 = new Person(1111,'person',0,600000);
p1.display();
p1.setDepartment('ddddd');
console.log(p1.getDepartment());


//extend
class Employee extends Person{

}

let e1 = new Employee(2222,'employee',1,3333333);
e1.display();

