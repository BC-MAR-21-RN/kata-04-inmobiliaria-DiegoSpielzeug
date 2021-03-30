import React from 'react';
import {View, Text} from 'react-native';
import Bath from 'react-native-vector-icons/FontAwesome';
import {styles} from '../styles/styles';

const RoomTwo = ({item}) => {
    return (
        <View style={styles.rooms}>
        <Bath name="bath" style={styles.icon}/>
        <Text>{item.bathrooms}</Text>
    </View>
    );
};

export default RoomTwo;