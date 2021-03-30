import React from 'react';
import {View, Text} from 'react-native';


import Home from 'react-native-vector-icons/FontAwesome';
import {styles} from '../styles/styles';

const RommThree = ({item}) => {
    return (
        <View style={styles.rooms}>
                <Home name="home" style={styles.icon}/>
                <Text>{item.beds}</Text>
            </View>
    );
};

export default RommThree;