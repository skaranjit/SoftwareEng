import React, { Component, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
//import { useDispatch, useSelector, useStore } from "react-redux";
import {
  AddInventory,
  UpdateInventoryItemQuantity,
  DeleteInvItem,
  UpdateInventoryItemPrice,
  UpdateInventoryItemUsed,
} from "../../../actions/InventoryAction";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { ScrollView, TextInput } from "react-native-gesture-handler";
//End of Import

//Start of Class
class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Name", "Price", "Quantity"],
      x: this.props.inventItem,
      nm: "",
      pr: 0,
      qn: 0,
      isModalVisible: false,
    };
  }
  /////////Useful Functions///////////
  changeText = (key, obj, text, tochange) => {
    if (text == null) {
      text = 0;
    }
    if (tochange == "price") {
      this.props.updatePrice(key, obj, text);
    } else if (tochange == "quantity") {
      this.props.updateQuantity(key, obj, text);
    } else if (tochange == "used") {
      this.props.useItems(key, obj, text);
    }
    this.setState({ x: this.props.inventItem });
  };
  deleteITEM = (key) => {
    this.props.deleteItem(key);

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
  //////////////////////////////////

  ////////////Content to display to users /////////////////////////////////////////////
  render() {
    const data = Object.entries(this.state.x);
    console.log(this.state.x);
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
              fontSize: 15,
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
              fontSize: 15,
              textAlign: "left",
              marginVertical: 10,
              width: "10%",
            }}
          >
            Price
          </Text>
          <Text
            style={{
              fontSize: 15,
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
              fontSize: 15,
              textAlign: "justify",
              marginVertical: 10,

              width: "13%",
            }}
          >
            Total Price
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: "left",
              marginVertical: 10,
              width: "6%",
            }}
          >
            Used
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: "left",
              marginVertical: 10,
              width: "10%",
            }}
          >
            Remaining Items
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
            maxHeight: 60,
            marginTop: "20%",
            flex: 1,
            borderRadius: 10,
            flexDirection: "row",
          }}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={() => this.closeModal()}
        >
          <TextInput
            style={{
              fontSize: 16,
              left: 0,
              marginVertical: 10,
              width: "14%",
            }}
            placeholder="Name"
            onChangeText={(name) => {
              this.setState({ nm: name });
            }}
          />
          <TextInput
            style={{
              fontSize: 16,
              textAlign: "justify",
              marginLeft: 10,
              marginVertical: 10,
              width: "14%",
            }}
            placeholder="Quantity"
            onChangeText={(quan) => {
              this.setState({ qn: quan });
            }}
          />
          <TextInput
            style={{
              fontSize: 16,
              textAlign: "justify",
              marginLeft: 10,
              marginVertical: 10,
              width: "14%",
            }}
            placeholder="Price"
            onChangeText={(price) => {
              this.setState({ pr: price });
            }}
          />
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
        </Modal>
        {console.log(this.state.x)}
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
              <TextInput
                style={{
                  fontSize: 16,
                  textAlign: "justify",
                  marginVertical: 10,
                  width: "6%",
                }}
                value={item.item[1].used.toString()}
                onChangeText={(num) =>
                  this.changeText(item.item[0], item.item[1], num, "used")
                }
                keyboardType="numeric"
              />
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "justify",
                  marginVertical: 10,
                  width: "10%",
                }}
              >
                {item.item[1].CalcRemain()}
              </Text>
              <MaterialCommunityIcons
                name="delete-circle-outline"
                size={40}
                color="black"
                title="delete"
                style={{ padding: 2 }}
                onPress={() => this.deleteITEM(item.item[0])}
              />
            </View>
          )}
        />
      </ScrollView>
    );
  }
  /////////////////////////////////////////////////////////////////////////////////
}
//End of Class
//Start of styels
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
//End of Styles

//Reducers

const mapStateToProps = (state) => {
  return {
    inventItem: state.inventory.InventoryList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addInventoryItem: (name, price, quantity) =>
      dispatch(AddInventory(name, price, quantity)),
    updatePrice: (key, obj, price) =>
      dispatch(UpdateInventoryItemPrice(key, obj, price)),
    updateQuantity: (key, obj, quan) =>
      dispatch(UpdateInventoryItemQuantity(key, obj, quan)),
    deleteItem: (key) => dispatch(DeleteInvItem(key)),
    useItems: (key, obj, quan) =>
      dispatch(UpdateInventoryItemUsed(key, obj, quan)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
