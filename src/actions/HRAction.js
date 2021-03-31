import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from "./types";

export const AddEmp = (empObj) => ({
  type: ADD_EMPLOYEE,
  empObj: empObj,
});

export const DelEmp = (key) => ({
  type: DELETE_EMPLOYEE,
  key: key,
});

export const UpdateEmp = (key, obj, text) => ({
  type: UPDATE_EMPLOYEE,
  key: key,
  obj: obj,
  text: text,
});
