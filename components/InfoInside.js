import React from 'react';
import {View, Text} from 'react-native';

import Home from 'react-native-vector-icons/FontAwesome';
import Bed from 'react-native-vector-icons/FontAwesome';
import Bath from 'react-native-vector-icons/FontAwesome';

import {styles} from '../styles/styles';

const InfoInside = ({item}) => {
    return (
        <View style={styles.info_inside}>
            <View style={styles.rooms}>
                <Bed name="bed" style={styles.icon}/>
                <Text>{item.beds}</Text>
            </View>
            <View style={styles.rooms}>
                <Bath name="bath" style={styles.icon}/>
                <Text>{item.bathrooms}</Text>
            </View>
            <View style={styles.rooms}>
                <Home name="home" style={styles.icon}/>
                <Text>{item.beds}</Text>
            </View>
        </View>
    );
};

export default InfoInside;