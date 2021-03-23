import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  largeTxt: {
    fontSize: 85,
    padding: 20,
    color: "green",
  },
  midTxt: {
    padding: 20,
    fontSize: 40,
    color: "blue",
  },
  MTxt: {
    padding: 10,
    fontSize: 20,
  },
  largeButton: {
    fontWeight: "bold",
    fontSize: 20,
  },
  btnGroup: {
    flex: 1,
    flexDirection: "row",
  },
  btnGroupLoginorRegister: {
    flexDirection: "row",
    alignContent: "stretch",
  },
  formGroup: {
    margin: 50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "space-around",
  },
  row: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  btnBox: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
    borderWidth: 2,
    shadowOpacity: 1,
    shadowRadius: 15,
    maxWidth: 200,
    maxHeight: 200,
    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
    marginRight: 80,
    marginLeft: 80,
    margin: 20,
    backgroundColor: "#504B4A",
  },
  resultTxtBox: {
    flex: 0.1,
    flexDirection: "column",
  },
  resultTxt: {
    fontSize: 30,
    textAlign: "center",
  },
  btnTxt: {
    fontSize: 35,

    textAlign: "center",
  },
});
export default styles;

// Background Color: #5E6265
