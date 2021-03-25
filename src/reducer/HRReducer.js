import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "./../actions/types";
import Employee from "../class/Employee";
import { TouchableWithoutFeedbackComponent } from "react-native";
//Mock Data
const a = new Employee(
  "Suman",
  "Karanjit",
  "218-790-0592",
  "123-12-2345",
  "Server",
  12
);
a.setCode(1111);
const b = new Employee(
  "Ayush",
  "asd",
  "218-790-0592",
  "123-12-2345",
  "Manager",
  25
);
b.setCode(2222);
const c = new Employee(
  "Admin",
  "Admin",
  "218-790-0592",
  "123-12-2345",
  "Server",
  12
);
c.setAdminCode(123456);
c.ClockIn();
c.setCode(3333)
const d = new Employee(
  "Ankur",
  "asdaaasd",
  "218-790-0592",
  "123-12-2345",
  "Server",
  12
);
d.setCode(4444);
const e = new Employee(
  "Nabin",
  "Kale",
  "218-790-0592",
  "123-12-2345",
  "Server",
  12
);
e.setCode(5555);
const f = new Employee(
  "Manjil",
  "Panta",
  "218-790-0592",
  "123-12-2345",
  "Server",
  12
);
f.setCode(2222)

c.ClockOut();

const initialState = {
  EmpList: {
    [a.Id]: a,
    [b.Id]: b,
    [c.Id]: c,
    [d.Id]: d,
    [e.Id]: e,
    [f.Id]: f,
  },
};

const EmpReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        EmpList: state.EmpList.assign(data),
      };
    case UPDATE_EMPLOYEE:
      //state.InventoryList.forEach((item) => console.log(item.obj.price));
      action.obj.price = action.price;
      return {
        ...state,
        [action.key]: action.obj,
        InventoryList: state.InventoryList,
      };
    case DELETE_EMPLOYEE:
      action.obj.quantity = action.quan;
      return {
        ...state,
        [action.key]: action.obj,
        InventoryList: state.InventoryList,
      };

    default:
      return state;
  }
};

export default EmpReducer;
