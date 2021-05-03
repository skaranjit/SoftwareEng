import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../../styles/styles";
import Modal from "react-native-modal";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { isNull } from "lodash";

export default class PaymentPage extends Component {
  constructor() {
    super();
    this.state = {
      tips: 0,
      total: 45.5,
      isModalVisible: false,
    };
  }
  calcTax(total) {
    return (0.07 * total).toFixed(2);
  }
  paymentProcess() {
    this.setState({ isModalVisible: true });
  }
  calcTip(perc) {
    var tot = parseFloat(this.state.total);

    var tx = parseFloat(this.calcTax(tot));
    return ((perc / 100) * (tot + tx)).toFixed(2);
  }
  calcTotal() {
    var tot = parseFloat(this.state.total);
    var tp = parseFloat(this.state.tips);
    var tx = parseFloat(this.calcTax(tot));
    console.log(tot, tp, tx);
    return (tot + tp + tx).toFixed(2);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            flex: 0.5,
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
              top: 70,
            }}
          >
            <Text style={{ padding: 20, fontSize: 40 }}>Your Orders:</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "stretch",
                marginLeft: 20,
                padding: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  minWidth: 250,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 20 }}> Item: </Text>
                  <Text style={{ fontSize: 20 }}> Tea </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 20 }}> Quantity: </Text>
                  <Text style={{ fontSize: 20 }}> 1 </Text>
                </View>
              </View>

              <Text style={{ fontSize: 20 }}> $2.50 </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "stretch",
                padding: 5,
                marginLeft: 20,
              }}
            >
              <View style={{ flexDirection: "column", minWidth: 250 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 20 }}> Item: </Text>
                  <Text style={{ fontSize: 20 }}> SomeFood </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 20 }}> Quantity: </Text>
                  <Text style={{ fontSize: 20 }}> 2 </Text>
                </View>
              </View>

              <Text style={{ fontSize: 20 }}> $38.50 </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "stretch",
                padding: 5,
                marginLeft: 20,
              }}
            >
              <View style={{ flexDirection: "column", minWidth: 250 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 20 }}> Item: </Text>
                  <Text style={{ fontSize: 20 }}> Chicken Nuggets </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 20 }}> Quantity: </Text>
                  <Text style={{ fontSize: 20 }}> 1 </Text>
                </View>
              </View>

              <Text style={{ fontSize: 20 }}> $4.50 </Text>
            </View>
            <View
              style={{
                marginTop: 5,
                borderBottomColor: "black",
                borderBottomWidth: 3,
              }}
            ></View>
            <View
              style={{
                marginTop: 5,
                borderBottomColor: "black",
                borderBottomWidth: 3,
              }}
            ></View>
            <View
              style={{
                marginTop: 5,
                borderBottomColor: "black",
                borderBottomWidth: 3,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, minWidth: 250 }}> Food-Total</Text>
              <Text style={{ fontSize: 20 }}>{"$" + this.state.total}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, minWidth: 250 }}> Tax</Text>
              <Text style={{ fontSize: 20 }}>
                {" "}
                {this.calcTax(this.state.total)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, minWidth: 250 }}> Gratituty</Text>
              <Text style={{ fontSize: 20 }}> $0</Text>
            </View>
            <View
              style={{
                marginTop: 5,
                borderBottomColor: "black",
                borderBottomWidth: 3,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, minWidth: 250 }}> Total</Text>
              <Text style={{ fontSize: 20 }}> $48.50</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column-reverse",
            justifyContent: "space-around",
          }}
        >
          <View style={styles.formGroup}>
            <Text
              style={{ fontSize: 30, marginBottom: 20, fontStyle: "italic" }}
            >
              Enter your card information or Swipe
            </Text>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text style={{ fontSize: 20, minWidth: 200 }}>Card Number:</Text>
              <TextInput
                style={{ fontSize: 20, borderBottomWidth: 2, minWidth: 300 }}
                placeholder="16 digit card number "
              />
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text style={{ fontSize: 20, minWidth: 200 }}>
                Security Number:
              </Text>
              <TextInput
                style={{ fontSize: 20, borderBottomWidth: 2, minWidth: 300 }}
                placeholder="3-digit number "
              />
            </View>

            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text style={{ fontSize: 20, minWidth: 200 }}>Expiry Date: </Text>
              <TextInput
                style={{ fontSize: 20, borderBottomWidth: 2, minWidth: 300 }}
                placeholder="mm/yyyy "
              />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 30,
                marginLeft: 30,
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  maxHeight: 60,
                  borderRadius: 20,
                  minWidth: 100,
                  alignContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00FFFF",
                }}
                onPress={() => {
                  this.paymentProcess();
                }}
              >
                <Text style={styles.MTxt}>Pay</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  maxHeight: 60,
                  borderRadius: 20,
                  minWidth: 100,
                  alignContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00FFFF",
                }}
                onPress={() => this.props.navigation.goBack()}
              >
                <Text style={styles.MTxt}>Cancel</Text>
              </TouchableOpacity>
              <Modal
                isVisible={this.state.isModalVisible}
                style={{
                  backgroundColor: "white",
                  alignContent: "center",
                  alignItems: "center",
                  flex: 1,
                  borderRadius: 10,
                  flexDirection: "column",
                }}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                onBackdropPress={() => this.setState({ isModalVisible: false })}
              >
                <Text style={{ fontSize: 40, marginBottom: 10 }}>
                  Payment Success, Thank You!
                </Text>

                <Text style={{ fontSize: 28 }}> Tips: </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      borderWidth: 2,
                      maxHeight: 60,
                      borderRadius: 20,
                      minWidth: 100,
                      alignContent: "center",
                      alignItems: "center",
                      backgroundColor: "#CEF6CE",
                    }}
                    onPressIn={() => {
                      this.setState({
                        tips: this.calcTip(15),
                      });
                    }}
                  >
                    <Text style={styles.MTxt}>15%</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderWidth: 2,
                      maxHeight: 60,
                      borderRadius: 20,
                      minWidth: 100,
                      alignContent: "center",
                      alignItems: "center",
                      backgroundColor: "#81F7BE",
                    }}
                    onPressIn={() => {
                      this.setState({
                        tips: this.calcTip(18),
                      });
                    }}
                  >
                    <Text style={styles.MTxt}>18%</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderWidth: 2,
                      maxHeight: 60,
                      borderRadius: 20,
                      minWidth: 100,
                      alignContent: "center",
                      alignItems: "center",
                      backgroundColor: "#F5ECCE",
                    }}
                    onPressIn={() => {
                      this.setState({
                        tips: this.calcTip(20),
                      });
                    }}
                  >
                    <Text style={styles.MTxt}>20%</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Text style={{ fontSize: 30, margin: 20 }}>Custom Tips:</Text>
                  <TextInput
                    style={{
                      fontSize: 30,
                      minWidth: 200,
                      borderWidth: 2,
                      borderRadius: 20,

                      margin: 20,
                      paddingHorizontal: 10,
                      textAlign: "right",
                    }}
                    onChangeText={(tip) =>
                      this.setState({ tips: parseFloat(tip) })
                    }
                  />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 30 }}>Your new total: </Text>
                  <Text
                    style={{
                      fontSize: 30,

                      paddingHorizontal: 10,
                      textAlign: "right",
                    }}
                  >
                    {this.calcTotal()}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <Text style={{ fontSize: 30 }}>Feedback: </Text>
                  <TextInput
                    multiline={true}
                    style={{
                      fontSize: 20,
                      borderStyle: "dotted",
                      borderColor: "black",
                      borderWidth: 2,
                      textAlign: "auto",

                      minWidth: 390,
                      minHeight: 100,
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 20,
                  }}
                >
                  <MaterialIcons
                    name="check-circle"
                    size={40}
                    style={{ margin: 20 }}
                    color="black"
                    title="check"
                    onPress={() => {}}
                  />

                  <MaterialIcons
                    name="cancel"
                    size={40}
                    color="black"
                    style={{ margin: 20 }}
                    title="delete"
                    onPress={() => {
                      this.setState({
                        isModalVisible: false,
                      });
                      this.props.navigation.goBack();
                    }}
                  />
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
