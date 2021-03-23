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

import { addEmp, updateEmp, delEmp } from "./../../../actions/HRAction";
class HR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Name", "Price", "Quantity"],
      x: this.props.EmpItem,
    };
  }
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
        </View>

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
