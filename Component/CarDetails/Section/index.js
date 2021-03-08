import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Section = ({ props }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
            <Image style={styles.img} source={require(`../../../assets/${props.img}`)} />
            </View>
            
            <View style={styles.section}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
            </View>
        </View>
    );
};

export default Section;