import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  CLOCK_IN,
  CLOCK_OUT,
  SET_ADMIN,
  SET_CODE,
} from "./types";

export const AddEmp = (empObj) => ({
  type: ADD_EMPLOYEE,
  empObj: empObj,
});

export const DelEmp = (key) => ({
  type: DELETE_EMPLOYEE,
  key: key,
});

export const Clock_In = (empObj) => ({
  type: CLOCK_IN,
  empObj: empObj,
});
export const Clock_Out = (empObj) => ({
  type: CLOCK_OUT,
  empObj: empObj,
});
export const UpdateEmp = (obj) => ({
  type: UPDATE_EMPLOYEE,

  obj: obj,
});
export const Set_Code = (obj, text) => ({
  type: SET_CODE,
  obj: obj,
  code: text,
});
export const Set_ADCode = (obj, text) => ({
  type: SET_ADMIN,
  obj: obj,
  code: text,
});
