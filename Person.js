var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(id, name, gender, salary) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.salary = salary;
    }
    //setter
    Person.prototype.setDepartment = function (dep) {
        this.department = dep;
    };
    //getter
    Person.prototype.getDepartment = function () {
        return this.department;
    };
    Person.prototype.display = function () {
        console.log("ID:" + this.id);
        console.log("NAME:" + this.name);
        console.log("GENDER:" + this.gender);
        console.log("SALARY:" + this.salary);
    };
    return Person;
}());
var p1 = new Person(1111, 'person', 0, 600000);
p1.display();
p1.setDepartment('ddddd');
console.log(p1.getDepartment());
//extend
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(Person));
var e1 = new Employee(2222, 'employee', 1, 3333333);
e1.display();
