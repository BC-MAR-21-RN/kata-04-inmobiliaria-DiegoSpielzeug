import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styles';
import RommEins from './RommEins';
import RommTwo from './RoomTwo';
import RommThree from './RommThree';

const InfoInside = ({item}) => {
    return (
        <View style={styles.info_inside}>
           <RommEins item={item}/>
           <RommTwo item={item}/>
           <RommThree item={item}/>
        </View>
    );
};

export default InfoInside;