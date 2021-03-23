import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from "./types";

export const addEmp = (empObj) => {
  type: ADD_EMPLOYEE;
  data: empObj;
};

export const delEmp = (key) => {
  type: DELETE_EMPLOYEE;
  key: key;
};

export const updateEmp = (key, obj, text) => {
  type: UPDATE_EMPLOYEE;
  key: key;
  obj: obj;
  text: text;
};
