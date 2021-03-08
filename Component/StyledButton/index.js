import React from "react";
import { Text, View, Button } from "react-native";
import styles from "./styles.js";

const StyledButton = (props) => {
  const bgColor = props.type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = props.type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Button
        title={props.content}
        style={[styles.button, { backgroundColor: bgColor }, textColor]}
        onPress={() => props.onPress()}
      >
      </Button>
    </View>
  );
};

export default StyledButton;
