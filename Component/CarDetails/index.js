import React from 'react';
import { View } from 'react-native';
import Screen1 from "./Screen1/index.js";
import carsDetails from "./carsDetails.js";
import styles from "./styles";

const CarDetails = ({id}) => {
  const index = Object.values(id);
  return (
    <View style={styles.container}>
      <Screen1 car={carsDetails[index]} />
    </View>
  );
};

export default CarDetails;