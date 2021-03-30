import React from 'react';
import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';

import {house} from './db';
import Item from './components/Item'

const App = () => {
  
  return (
    <View style={styles.container} >
      <FlatList 
        style={styles.list}
        data={house}
        renderItem={ ({item}) => <Item item={item}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: "100%",
    backgroundColor: "#f1f1f1"
  },
  list:{
    marginHorizontal: "2.5%",
   
  }
});

export default App;
