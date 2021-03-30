import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styles';

import Bed from 'react-native-vector-icons/FontAwesome';
import Bath from 'react-native-vector-icons/FontAwesome';
import Home from 'react-native-vector-icons/FontAwesome';

const InfoInside = ({item}) => {
  return (
    <View style={styles.info_inside}>
      <View style={styles.rooms}>
        <Bed name="bed" style={styles.icon} />
        <Text style={styles.text}>{item.beds}</Text>
      </View>
      <View style={styles.rooms}>
        <Bath name="bath" style={styles.icon} />
        <Text style={styles.text}>{item.bathrooms}</Text>
      </View>
      <View style={styles.rooms}>
        <Home name="home" style={styles.icon} />
        <Text style={styles.text}>{item.beds}</Text>
      </View>
    </View>
  );
};

export default InfoInside;
