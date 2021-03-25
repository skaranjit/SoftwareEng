import React, { useRef, numeric, Component } from "react";
import { Alert, StyleSheet } from "react-native";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacityBase,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import _, { isEqual } from "lodash"
class HomeScreenforEMP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultTxt: "",
    };
   
  }

  buttonPressed(text) {
    if (text == "Del") {
      this.setState({
        resultTxt: this.state.resultTxt.slice(0, -1),
      });
    } else {
      this.setState({
        resultTxt: this.state.resultTxt + text,
      });
    }
    this.resText = this.state.resultTxt;
  }
  checkCode() {
    let res = 0;
    res = this.state.resultTxt;
    console.log(res);
    if (this.state.resultTxt.length == 4) {
      console.log(this.props.EmpItem)
      const k =_.findKey(this.props.EmpItem,function(o) {
        
        if(o.getCode() == res){
          return o;
        } });
        //Data for who logged in :
        const objA= _.get(this.props.EmpItem,k)
        const NameA = objA.FName + " " + objA.LName;

        console.log(NameA)
        if(k >0){
        return this.props.navigation.navigate("Table");
      }
      else{
        alert("Incorrect Password!")
      }
      
    } else if (this.state.resultTxt.length == 6) {
      const k =_.findKey(this.props.EmpItem,function(o) {
        
        if(o.getAdminCode() == res){
          return o;
        } });
        const objA= _.get(this.props.EmpItem,k)
        const NameA = objA.FName + " " + objA.LName;

        console.log(NameA)
      if(k >0){
        return this.props.navigation.navigate("Manager");
      }
      else{
        alert("Incorrect Password!")
      }
      
    }else {
      alert("Please check the code and try again!")
    }
  }
  loadView(vw) {}
  render() {
    let rows = [];
    let nums = [
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
      ["Del", 0, "GO"],
    ];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        if (nums[i][j] == "GO") {
          row.push(
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.checkCode() }
            >
              <Text style={styles.btnTxt}>GO</Text>
            </TouchableOpacity>
          );
        } else {
          row.push(
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.buttonPressed(nums[i][j])}
            >
              <Text style={styles.btnTxt}>{nums[i][j]}</Text>
            </TouchableOpacity>
          );
        }
      }
      rows.push(<View style={styles.btnBox}>{row}</View>);
    }

    return (
      <View style={styles.container}>
        <View style={styles.resultTxtBox}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Enter Code :
          </Text>

          <Text style={styles.resultTxt}>{this.state.resultTxt}</Text>
        </View>

        <View style={styles.row}>{rows}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
    flex: 20,
    borderWidth: 2,
    minWidth: 200,
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
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
const mapStateToProps = (state) => {
  return {
    EmpItem: state.empItems.EmpList,
  };
};

export default  connect(mapStateToProps)(HomeScreenforEMP);
