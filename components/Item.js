import React from 'react';
import {View, Text,Image} from 'react-native'

import Marker from 'react-native-vector-icons/FontAwesome';
import Home from 'react-native-vector-icons/FontAwesome';
import Bed from 'react-native-vector-icons/FontAwesome';
import Bath from 'react-native-vector-icons/FontAwesome';
import Heart from 'react-native-vector-icons/FontAwesome';

import InfoInside from './InfoInside';
import {styles} from '../styles/styles';

const Item = ({item}) => {
    return (
        <View style={styles.containter}>
            <Image style={styles.img} source={item.img}/>

            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>

                <View style={styles.location}>
                    <Marker name="map-marker" style={styles.icon}/>
                    <Text>{item.location}</Text>
                </View>

                <InfoInside item={item}/>

                <View style={styles.prices}>
                    <Text style={styles.text_price}>${item.price}/m</Text>
                    <Heart name="heart" style={styles.icon_heart}/> 
                </View>
            </View>
        </View>
    );
};
export default Item;