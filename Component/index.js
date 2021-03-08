import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import Section from "./CarDetails/Section/index";
import styles from './styles';

const ListCar = ({ props }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <Section key={item.title} props={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default ListCar;