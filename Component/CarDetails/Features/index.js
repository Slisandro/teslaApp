import React from "react";
import { View, Text } from "react-native";
import styles from './styles';

const Features = ({props}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.number}>
        {props.number}
        <Text style={styles.title}>{props.title}</Text>
      </Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  );
}

export default Features;