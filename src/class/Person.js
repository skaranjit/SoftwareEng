export default class Person {
  constructor(FName, LName, PhoneNumber) {
    this.FName = FName;
    this.LName = LName;
    this.PhNo = PhoneNumber;
  }
  UpdateFName(FName) {
    this.FName = FName;
  }
  UpdateLName(LName) {
    this.LName = LName;
  }
  UpdatePhoneNumber(ph) {
    this.PhNo = ph;
  }
  getFName() {
    return this.FName;
  }
  getLName() {
    return this.LName;
  }
  getPhoneNumber() {
    return this.PhoneNumber;
  }
  print() {
    print("Name : " + this.FName + " " + this.LName);
  }
}
