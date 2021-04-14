import { isLength } from "lodash";
import { Alert } from "react-native";
import Person from "./Person";

export default class Employee extends Person {
  static #Id = 9100;
  #AdminCode = null;
  static #CodeList = ["1234"];
  #Code = "1234"; //Each employee have a unique code.
  constructor(FName, LName, PhoneNumber, SSN, Role, Salary) {
    super(FName, LName, PhoneNumber);
    this.SSN = SSN;
    this.Role = Role;
    this.Salary = Salary;
    this.clockIn = "0";
    this.clockOut = "0";
    this.isAdmin = false;
    Employee.#Id++;
    this.Id = Employee.#Id;
    this.timeSheet = [];
    this.code = this.#Code;
    this.Admincode = this.#AdminCode;
  }
  ClockIn() {
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    this.clockIn = h + ":" + m + ":" + s;
  }
  ClockOut() {
    if (this.clockIn != 0) {
      const tod = new Date();
      const H = tod.getHours();
      const M = tod.getMinutes();
      const S = tod.getSeconds();
      this.clockOut = H + ":" + M + ":" + S;
      this.timeSheet.push([tod.toDateString(), this.clockIn, this.clockOut]);
      console.log(this.timeSheet);
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
    if (String(x).length == 6) {
      this.isAdmin = true;
      this.#AdminCode = x;
    } else {
      console.log("Failed!. Not the correct number");
      alert("To Create Admin Code The number needs to be 6 at leaset");
    }
    this.Admincode = this.#AdminCode;
  }
  getAdminCode(x) {
    return this.#AdminCode;
  }
  getCode(x) {
    return this.#Code.toString();
  }
  setCode(x) {
    console.log(x);

    if (String(x).length == 4) {
      if (Employee.#CodeList.indexOf(x) == -1) {
        this.#Code = x;
      } else if (Employee.#CodeList.indexOf(x) > -1) {
        this.#Code = String(this.Id);
        alert("Code already in used. So code has been set to :" + this.#Code);
      }
      this.code = this.#Code;
      Employee.#CodeList.push(this.#Code);
    } else {
      alert("Needs to four digit!");
    }
  }
  closeOut() {
    this.clockIn = null;
  }
}
