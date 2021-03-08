import React from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import Features from "../Features/index";
import ListCar from "../../index";
import styles from './styles';


const Screen1 = ({ car }) => {
    const { name, info, id, image, description } = car;
    return (
        <View id={id} style={styles.carContainer}>
            <View style={styles.imgContainer}>
                <ImageBackground
                    source={require(`../../../assets/${image}`)}
                    style={styles.image}
                />
                <View style={styles.titles}>
                    <Text style={styles.title}>{name}</Text>
                </View>
            </View>
            <View style={styles.list}>
                <FlatList
                    data={info}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Features props={item} />}
                    horizontal
                />
            </View>
            <ListCar style={styles.listCar} props={description} />
        </View>
    );
};

export default Screen1;