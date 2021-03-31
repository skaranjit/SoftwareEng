import React, { Component } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { AddEmp, updateEmp, delEmp, DelEmp } from "./../../../actions/HRAction";
import Employee from "./../../../class/Employee";
import styles from "./../../../styles/styles";
////////////////////////////////////////////////////////////////////////////////////////////

class HR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Name", "Price", "Quantity"],
      x: this.props.EmpItem,
      Fname: "",
      Lname: "",
      phone: "",
      ssn: "",
      role: "",
      salary: 0,
      isAddModal: false,
      isSetModal: false,
      code: "",
    };
  }
  //////////////////////Functions////////////////////////////

  changeText = (key, obj, text, tochange) => {
    if (text == null) {
      text = 0;
    }
    if (tochange == "clockin") {
      this.props.updatePrice(key, obj, text);
    } else if (tochange == "clockout") {
      this.props.updateQuantity(key, obj, text);
    }
    console.log(this.props.inventItem);
    this.setState({ x: this.props.inventItem });
  };
  ItemSeprator = () => (
    <View
      style={{
        height: 6,
        borderRadius: 290,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    />
  );

  AddNewEmp = (Fname, Lname, phone, ssn, role, salary) => {
    if (
      Fname == "" ||
      Lname == "" ||
      phone == "" ||
      ssn == "" ||
      role == "" ||
      salary == 0
    ) {
      alert("Please enter the information");
    } else {
      const empObj = new Employee(Fname, Lname, phone, ssn, role, salary);
      this.props.add(empObj);
      this.setState({
        Fname: "",
        Lname: "",
        phone: 0,
        ssn: "",
        role: "",
        salary: 0,
        isAddModal: false,
      });
      this.setState({ x: this.props.EmpItem });
    }
    console.log(this.state.x);
  };
  DeleteEmp = (key) => {
    this.props.del(key);
    this.setState({
      x: this.props.EmpItem,
    });
  };
  setCode = (text) => {
    if (text == "") {
    }
  };
  //////////////////////////////////////////////////////////

  render() {
    const data = Object.entries(this.state.x);

    return (
      <ScrollView
        automaticallyAdjustContentInsets={true}
        pagingEnabled={true}
        scrollEnabled={true}
        bounces={true}
        decelerationRate={20}
        snapToInterval={20} //your element width
        snapToAlignment={"start"}
      >
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "black",
            borderBottomWidth: 6,
            borderRadius: 290,
            justifyContent: "flex-start",
            alignItems: "stretch",
            widht: "100%",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              marginLeft: 60,
              marginVertical: 10,
              width: "20%",
            }}
          >
            Name
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "left",
              marginVertical: 10,
              width: "12%",
            }}
          >
            Clock-In
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "left",
              marginVertical: 10,
              width: "13%",
              flexWrap: "wrap",
            }}
          >
            Clock-Out
          </Text>

          <MaterialIcons
            name="add-circle"
            size={40}
            style={{ marginLeft: 20 }}
            color="black"
            title="delete"
            onPress={() => this.setState({ isAddModal: true })}
          />
        </View>
        <Modal
          isVisible={this.state.isAddModal}
          style={{
            backgroundColor: "white",
            padding: 80,
            flex: 1,
            borderRadius: 10,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={() => this.setState({ isAddModal: false })}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",

              justifyContent: "space-around",
              alignContent: "flex-end",
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              FirstName :
            </Text>
            <TextInput
              style={{
                flex: 3,
                borderColor: "black",
                fontSize: 20,
                color: "black",
                borderWidth: 2,
                width: "30%",
                height: 35,
              }}
              borderColor="black"
              onChangeText={(name) => {
                this.setState({ Fname: name });
              }}
            />
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              LastName :
            </Text>
            <TextInput
              style={{
                flex: 3,
                borderColor: "black",
                fontSize: 20,
                color: "black",
                borderWidth: 2,
                width: "30%",
                height: 35,
              }}
              borderColor="black"
              onChangeText={(name) => {
                this.setState({ Lname: name });
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",

              justifyContent: "space-around",
              alignContent: "flex-end",
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Phone :
            </Text>
            <TextInput
              style={{
                flex: 3,
                borderColor: "black",
                fontSize: 20,
                color: "black",
                borderWidth: 2,
                width: "30%",
                height: 35,
              }}
              borderColor="black"
              onChangeText={(phone) => {
                this.setState({ phone: phone });
              }}
            />
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              SSN :
            </Text>
            <TextInput
              style={{
                flex: 3,
                borderColor: "black",
                fontSize: 20,
                color: "black",
                borderWidth: 2,
                marginRight: 10,
                width: "30%",
                height: 35,
              }}
              borderColor="black"
              onChangeText={(ssn) => {
                this.setState({ ssn: ssn });
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "flex-end",
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Role :
            </Text>
            <TextInput
              style={{
                flex: 3,
                borderColor: "black",
                fontSize: 20,
                color: "black",
                borderWidth: 2,
                width: "30%",
                height: 35,
              }}
              borderColor="black"
              onChangeText={(role) => {
                this.setState({ role: role });
              }}
            />
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Salary :
            </Text>
            <TextInput
              style={{
                flex: 3,
                borderColor: "black",
                fontSize: 20,
                color: "black",
                borderWidth: 2,
                width: "30%",
                height: 35,
              }}
              borderColor="black"
              onChangeText={(salary) => {
                this.setState({ salary: salary });
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",

              justifyContent: "space-around",
              alignContent: "flex-end",
            }}
          >
            <MaterialIcons
              name="add-circle"
              size={40}
              style={{ marginLeft: 120, marginVertical: 10, marginRight: 20 }}
              color="black"
              title="delete"
              onPress={() => {
                this.AddNewEmp(
                  this.state.Fname,
                  this.state.Lname,
                  this.state.phone,
                  this.state.ssn,
                  this.state.role,
                  this.state.salary
                );
              }}
            />
            <MaterialIcons
              name="cancel"
              size={40}
              style={{ marginLeft: 20, marginVertical: 10 }}
              color="black"
              title="delete"
              onPress={() => this.setState({ isAddModal: false })}
            />
          </View>
        </Modal>

        <FlatList
          snapToAlignment={"start"}
          data={data}
          horizontal={false}
          ItemSeparatorComponent={this.ItemSeprator}
          numColumns={1}
          renderItem={(item) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "justify",
                  marginLeft: 60,
                  marginVertical: 10,
                  width: "20%",
                }}
              >
                {item.item[1].FName + " " + item.item[1].LName}
              </Text>

              <TextInput
                style={{
                  fontSize: 16,
                  textAlign: "justify",
                  marginLeft: 10,
                  marginVertical: 10,
                  width: "12%",
                }}
                value={
                  item.item[1].clockIn == null ? " " : item.item[1].clockIn
                }
                onChangeText={(clockin) => {
                  this.changeText(
                    item.item[0],
                    item.item[1],
                    clockin,
                    "clockin"
                  );
                }}
                keyboardType="numeric"
              />

              <TextInput
                style={{
                  fontSize: 16,
                  textAlign: "justify",
                  marginLeft: 10,
                  marginVertical: 10,
                  width: "12%",
                }}
                value={
                  item.item[1].clockOut == null ? " " : item.item[1].clockOut
                }
                onChangeText={(clockout) =>
                  this.changeText(
                    item.item[0],
                    item.item[1],
                    clockout,
                    "clockout"
                  )
                }
                keyboardType="numeric"
              />

              <MaterialIcons
                name="delete"
                size={40}
                style={{ margin: 10 }}
                onPress={() => this.DeleteEmp(item.item[0])}
              />
              <MaterialIcons
                name="info"
                size={40}
                style={{ margin: 10 }}
                onPress={() => this.DeleteEmp(item.item[0])}
              />
              <View style={{ flexDirection: "column", flex: 1 }}>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.setState({ isSetModal: true })}
                >
                  <Text style={styles.btnTxt2}>Set Code</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn2} onPress={() => {}}>
                  <Text style={styles.btnTxt2}>Set Admin</Text>
                </TouchableOpacity>
              </View>
              {/* For Code Set */}
              <Modal
                isVisible={this.state.isSetModal}
                style={{
                  backgroundColor: "white",
                  top: "22%",
                  left: "58%",
                  flex: 1,
                  padding: 20,
                  borderRadius: 10,
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  maxHeight: "20%",
                  maxWidth: "20%",
                }}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                onBackdropPress={() => this.setState({ isSetModal: false })}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",

                    justifyContent: "space-around",
                    alignContent: "stretch",
                  }}
                >
                  <Text>Enter Code:</Text>
                  <TextInput
                    style={{
                      flex: 1,
                      borderColor: "black",
                      fontSize: 20,
                      color: "black",
                      borderWidth: 2,
                      minWidth: "90%",
                      maxHeight: "50%",
                    }}
                    borderColor="black"
                    onChangeText={(code) => {
                      this.setState({ code: code });
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="check-circle-outline"
                    size={40}
                    style={{
                      marginVertical: 10,
                    }}
                    onPress={() => {
                      this.setCode(this.state.code);
                    }}
                  />
                  <MaterialIcons
                    name="cancel"
                    size={40}
                    style={{ marginLeft: 20, marginVertical: 10 }}
                    color="black"
                    title="delete"
                    onPress={() => this.setState({ isSetModal: false })}
                  />
                </View>
              </Modal>
              {/* For Admin Code Set */}
              <Modal
                isVisible={this.state.isSetModal}
                style={{
                  backgroundColor: "white",
                  top: "22%",
                  left: "58%",
                  flex: 1,
                  padding: 20,
                  borderRadius: 10,
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  maxHeight: "20%",
                  maxWidth: "20%",
                }}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                onBackdropPress={() => this.setState({ isSetModal: false })}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",

                    justifyContent: "space-around",
                    alignContent: "stretch",
                  }}
                >
                  <Text>Enter Code:</Text>
                  <TextInput
                    style={{
                      flex: 1,
                      borderColor: "black",
                      fontSize: 20,
                      color: "black",
                      borderWidth: 2,
                      minWidth: "90%",
                      maxHeight: "50%",
                    }}
                    borderColor="black"
                    onChangeText={(code) => {
                      this.setState({ code: code });
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="check-circle-outline"
                    size={40}
                    style={{
                      marginVertical: 10,
                    }}
                    onPress={() => {
                      this.setCode(this.state.code);
                    }}
                  />
                  <MaterialIcons
                    name="cancel"
                    size={40}
                    style={{ marginLeft: 20, marginVertical: 10 }}
                    color="black"
                    title="delete"
                    onPress={() => this.setState({ isSetModal: false })}
                  />
                </View>
              </Modal>
              {/* For Info modal  */}
              <Modal
                isVisible={this.state.isSetModal}
                style={{
                  backgroundColor: "white",
                  top: "22%",
                  left: "58%",
                  flex: 1,
                  padding: 20,
                  borderRadius: 10,
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  maxHeight: "20%",
                  maxWidth: "20%",
                }}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                onBackdropPress={() => this.setState({ isSetModal: false })}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",

                    justifyContent: "space-around",
                    alignContent: "stretch",
                  }}
                >
                  <Text>Enter Code:</Text>
                  <TextInput
                    style={{
                      flex: 1,
                      borderColor: "black",
                      fontSize: 20,
                      color: "black",
                      borderWidth: 2,
                      minWidth: "90%",
                      maxHeight: "50%",
                    }}
                    borderColor="black"
                    onChangeText={(code) => {
                      this.setState({ code: code });
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="check-circle-outline"
                    size={40}
                    style={{
                      marginVertical: 10,
                    }}
                    onPress={() => {
                      this.setCode(this.state.code);
                    }}
                  />
                  <MaterialIcons
                    name="cancel"
                    size={40}
                    style={{ marginLeft: 20, marginVertical: 10 }}
                    color="black"
                    title="delete"
                    onPress={() => this.setState({ isSetModal: false })}
                  />
                </View>
              </Modal>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    EmpItem: state.empItems.EmpList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (empObj) => dispatch(AddEmp(empObj)),
    del: (key) => dispatch(DelEmp(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HR);
