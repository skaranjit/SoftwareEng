import React, { Component, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextPropTypes,
  View,
} from "react-native";
//import { useDispatch, useSelector, useStore } from "react-redux";
import {
  addInventory,
  UpdateInventoryItemQuantity,
  DeleteInvItem,
  UpdateInventoryItemPrice,
} from "../../../actions/InventoryAction";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { connect } from "react-redux";
import { ScrollView, TextInput } from "react-native-gesture-handler";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Name", "Price", "Quantity"],
      x: this.props.inventItem,
    };
  }
  changeText = (key, obj, text, tochange) => {
    if (text == null) {
      text = 0;
    }
    if (tochange == "price") {
      this.props.updatePrice(key, obj, text);
    } else if (tochange == "quantity") {
      this.props.updateQuantity(key, obj, text);
    }
    console.log(this.props.inventItem);
    this.setState({ x: this.props.inventItem });
  };
  deleteITEM = (key) => {
    this.props.deleteItem(key);
    console.log(key);
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
    const data = Object.entries(this.state.x);
    // const tableData = [];
    // data.forEach((item) => {
    //   const rowData = [];

    //   for (let a of Object.entries(item[1])) {
    //     rowData.push(a[1].toString());
    //   }
    //   tableData.push(rowData);
    // });
    // console.log(tableData);

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
              width: "18%",
            }}
          >
            Name
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "left",
              marginVertical: 10,
              width: "10%",
            }}
          >
            Price
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "left",
              marginVertical: 10,
              width: "16%",
              flexWrap: "wrap",
            }}
          >
            Quantity Ordered
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              marginVertical: 10,

              width: "15%",
            }}
          >
            Total Price
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              marginVertical: 10,
              width: "5%",
            }}
          >
            Used
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
                  width: "17%",
                }}
              >
                {item.item[1].Name}
              </Text>

              <TextInput
                style={{
                  fontSize: 16,
                  textAlign: "justify",
                  marginLeft: 10,
                  marginVertical: 10,
                  width: "12%",
                }}
                value={item.item[1].price.toString()}
                onChangeText={(price) => {
                  this.changeText(item.item[0], item.item[1], price, "price");
                }}
                keyboardType="numeric"
              />

              <TextInput
                style={{
                  fontSize: 16,
                  textAlign: "justify",
                  marginLeft: 10,
                  marginVertical: 10,
                  width: "14%",
                }}
                value={item.item[1].quantity.toString()}
                onChangeText={(quan) =>
                  this.changeText(item.item[0], item.item[1], quan, "quantity")
                }
                keyboardType="numeric"
              />

              <Text
                style={{
                  fontSize: 16,
                  textAlign: "justify",
                  marginLeft: 10,
                  marginVertical: 10,
                  width: "13%",
                }}
              >
                {item.item[1].totalPrice().toFixed(2)}
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
                {item.item[1].totalPrice().toFixed(2)}
              </Text>
              <Button
                MaterialCommunityIcons="delete-circle-outline"
                size={40}
                color="black"
                title="delete"
                onPress={() => this.deleteITEM(item.item[0])}
              />
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    inventItem: state.inventory.InventoryList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePrice: (key, obj, price) =>
      dispatch(UpdateInventoryItemPrice(key, obj, price)),
    updateQuantity: (key, obj, quan) =>
      dispatch(UpdateInventoryItemQuantity(key, obj, quan)),
    deleteItem: (key) => dispatch(DeleteInvItem(key)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
