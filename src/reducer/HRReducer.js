import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  CLOCK_IN,
  CLOCK_OUT,
  SET_ADMIN,
  SET_CODE,
} from "./../actions/types";
import Employee from "../class/Employee";
import { TouchableWithoutFeedbackComponent } from "react-native";
import lodash from "lodash";
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
  "123-222-1231",
  "123-12-2345",
  "Manager",
  12
);
c.setAdminCode(123456);
c.ClockIn();
c.setCode(3333);
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
f.setCode(2222);

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
      state.EmpList = Object.assign(state.EmpList, {
        [action.empObj.Id]: action.empObj,
      });
      return state;

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        [action.obj.Id]: action.obj,
      };
    case DELETE_EMPLOYEE:
      return {
        EmpList: lodash.omit(state.EmpList, action.key),
      };
    case CLOCK_IN:
      const Newobj = action.empObj;
      Newobj.ClockIn();
      return {
        ...state,
        [Newobj.Id]: Newobj,
      };
    case CLOCK_OUT:
      const newObj = action.empObj;
      newObj.ClockOut();
      return {
        ...state,
        [newObj.Id]: newObj,
      };
    case SET_ADMIN:
      const Obj = action.obj;
      Obj.setAdminCode(action.code);
      return {
        ...state,
        [Obj.Id]: Obj,
      };
    case SET_CODE:
      const Obj2 = action.obj;
      Obj2.setCode(action.code);
      console.log(Obj2);
      return {
        ...state,
        [Obj2.Id]: Obj2,
      };
    default:
      return state;
  }
};

export default EmpReducer;
