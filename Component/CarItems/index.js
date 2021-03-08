import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = ({ car, history }) => {
  const { id, name, image } = car;
  return (
    <View id={id} style={styles.carContainer}>
      <ImageBackground
        source={require(`../../assets/${image}`)}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"See Details"}
          onPress={() => {
            history.push(`/products/${id}`)
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;