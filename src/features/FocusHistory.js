import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors'
import {fontSizes, spacing} from '../utils/sizes'

export const FocusHistory = ({history}) => {

  if(!history || !history.length) return <Text style={{color:'red', fontWeight: 'bold', paddingLeft: 10, fontSize: spacing.md}}>Oops!!, yet we have'nt focused on anything!!</Text>;
  const renderItem = ({item}) => <Text style={styles.text}>-{item}</Text>
  return (
  <View style={styles.container}>
  <Text style={styles.title}>Focus history will appear:</Text>
  <FlatList style={styles.list} data={history} renderItem={renderItem} />
  </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: spacing.md
  },
  title:{
    fontSize: fontSizes.md,
    color: colors.white,
    padding: spacing.md,
    fontWeight: 'bold'
  },
  text:{
    color: colors.white,
    fontWeight: "bold",
    fontStyle: 'italic'
  },
  list:{
    backgroundColor: 'blue'
  }
})