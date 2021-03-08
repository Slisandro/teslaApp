import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import CarItems from "../CarItems/index.js";
import cars from "./cars.js";
import styles from "./styles.js";

const CartList = ({history}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItems history={history} key={item.id} car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
}

export default CartList;