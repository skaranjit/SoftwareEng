import Person from "./Person";

export default class Employee extends Person {
  static #Id = 91000;
  constructor(FName, LName, PhoneNumber, SSN, Role, Salary) {
    super(FName, LName, PhoneNumber);
    this.SSN = SSN;
    this.Role = Role;
    this.Salary = Salary;
    this.clockIn = "0";
    this.clockOut = "0";
    this.AdminCode = null;
    this.isAdmin = false;
    Employee.#Id++;
    this.Id = Employee.#Id;
  }
  ClockIn() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    this.clockIn = h + ":" + m + ":" + s;
  }
  ClockOut() {
    if (this.clockIn != 0) {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      this.clockOut = h + ":" + m + ":" + s;
    } else throw error("Please Login first");
  }
  CalcTotalHours() {
    // var diff = (this.clockOut.getTime() - this.clockIn.getTime()) / 1000;
    // diff /= 60;
    var startTime = this.clockIn.split(":");
    var startHr = (
      parseInt(startTime[0]) +
      parseInt(startTime[1]) / 60 +
      parseInt(startTime[2]) / 3600
    ).toFixed(2);
    var endTime = this.clockOut.split(":");
    var endHr = (
      parseInt(endTime[0]) +
      parseInt(endTime[1]) / 60 +
      parseInt(endTime[2]) / 3600
    ).toFixed(2);
    var diff = endHr - endHr;
    return Math.floor(diff / 1000 / 60);
  }
  setAdminCode(x) {
    this.isAdmin = true;
    this.AdminCode = x;
  }
  closeOut() {
    this.clockIn = null;
  }
}
