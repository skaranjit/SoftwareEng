import React, { Component } from "react";
import {
  FlatList,
  SegmentedControlIOS,
  StyleSheet,
  Text,
  TextPropTypes,
  View,
} from "react-native";
import { connect } from "react-redux";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { addEmp, updateEmp, delEmp } from "./../../../actions/HRAction";

////////////////////////////////////////////////////////////////////////////////////////////

class HR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Name", "Price", "Quantity"],
      x: this.props.EmpItem,
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
  openModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };
  AddInventoryItem = (name, price, quantity) => {
    this.props.addInventoryItem(name, price, quantity);
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
    this.setState({
      nm: "",
      qn: 0,
      pr: 0,
    });
    this.setState({ x: this.props.inventItem });
  };
  closeModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };
  //////////////////////////////////////////////////////////

  render() {
    console.log(this.props.EmpItem);
    const data = Object.entries(this.state.x);

    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        pagingEnabled={true}
        scrollEnabled={true}
        bounces={true}
        decelerationRate={0}
        snapToInterval={200} //your element width
        snapToAlignment={"center"}
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
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              marginVertical: 10,

              width: "8%",
            }}
          >
            Admin
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              marginVertical: 10,
              width: "15%",
            }}
          >
            Total Hrs:
          </Text>
          <MaterialIcons
            name="add-circle"
            size={40}
            style={{ marginLeft: 20 }}
            color="black"
            title="delete"
            onPress={() => this.openModal()}
          />
        </View>
        <Modal
          isVisible={this.state.isModalVisible}
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
          onBackdropPress={() => this.closeModal()}
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
              placeholder="Name"
              onChangeText={(name) => {
                this.setState({ nm: name });
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
              placeholder="Name"
              onChangeText={(name) => {
                this.setState({ nm: name });
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
              placeholder="Name"
              onChangeText={(name) => {
                this.setState({ nm: name });
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
              placeholder="Name"
              onChangeText={(name) => {
                this.setState({ nm: name });
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
              placeholder="Name"
              onChangeText={(name) => {
                this.setState({ nm: name });
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
              placeholder="Name"
              onChangeText={(name) => {
                this.setState({ nm: name });
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
                console.log(this.state.pr);
                console.log(this.state.qn);
                console.log(this.state.nm);
                this.AddInventoryItem(
                  this.state.nm,
                  this.state.pr,
                  this.state.qn
                );
              }}
            />
            <MaterialIcons
              name="cancel"
              size={40}
              style={{ marginLeft: 20, marginVertical: 10 }}
              color="black"
              title="delete"
              onPress={() => this.closeModal()}
            />
          </View>
        </Modal>

        <FlatList
          horizontal={true}
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
                justifyContent: "flex-start",
                alignItems: "stretch",
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

              <Text
                style={{
                  fontSize: 16,
                  textAlign: "justify",
                  marginLeft: 10,
                  marginVertical: 10,
                  width: "8%",
                }}
              >
                {item.item[1].isAdmin == false ? "No" : "Yes"}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "justify",
                  marginLeft: 10,
                  marginVertical: 10,
                  width: "10%",
                }}
              >
                {item.item[1].CalcTotalHours()}
              </Text>
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
  return {};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HR);
