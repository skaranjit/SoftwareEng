import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";

import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./../../styles/styles";
import { Clock_In, Clock_Out } from "./../../actions/HRAction";
class EmpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objA: this.props.route.params,
      title: "",
    };
  }
  componentDidMount() {
    this.props.navigation.setOptions({
      title: "Welcome " + this.state.objA.FName,
      headerBackTitle: "Logout",
      headerRight: () => (
        <Button
          style={styles.btn2}
          onPress={() => {
            {
              this.state.objA.clockIn == "0" ? this.clockIN() : this.clockOUT();
              this.shouldComponentUpdate = true;
            }
          }}
          title="MyOrders"
        />
      ),
    });
  }
  clockIN() {
    const ObjB = this.state.objA;
    ObjB.ClockIn();
    console.log(this.state.objA);
    this.props.CLOCKIN(this.state.objA);
    this.setState({
      objA: ObjB,
      title: "ClockOut",
    });
  }
  clockOUT() {
    const ObjB = this.state.objA;
    ObjB.ClockOut();
    this.props.CLOCKOUT(this.state.objA);
    ObjB.clockIn = "0";
    console.log(ObjB);

    this.setState({
      objA: ObjB,
      title: "",
    });
  }

  render() {
    console.log(this.props);

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            flex: 0.1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "stretch",
            maxHeight: 50,

            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderWidth: 2,
              maxWidth: 120,
              Height: 60,
            }}
            onPress={() => {
              {
                this.state.objA.clockIn == "0"
                  ? this.clockIN()
                  : this.clockOUT();
                this.shouldComponentUpdate = true;
              }
            }}
          >
            <Text style={styles.MTxt}>
              {this.state.objA.clockIn == "0" ? "Clock In" : "Clock Out"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text>This is Home Screen </Text>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    CLOCKIN: (obj) => dispatch(Clock_In(obj)),
    CLOCKOUT: (obj) => dispatch(Clock_Out(obj)),
  };
};
export default connect(null, mapDispatchToProps)(EmpView);
