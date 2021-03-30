import React from 'react';
import {View, Text} from 'react-native';
import Bed from 'react-native-vector-icons/FontAwesome';
import {styles} from '../styles/styles';

const RoomEins = ({item}) => {
    return (
        <View style={styles.rooms}>
            <Bed name="bed" style={styles.icon}/>
            <Text>{item.beds}</Text>
        </View>
    );
};

export default RoomEins;