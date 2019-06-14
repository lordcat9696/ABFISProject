
import React, { memo, useState, useEffect } from 'react';
import {Platform, StyleSheet, Text, View , AppRegistry} from 'react-native';


const TestJs = memo((props) => {
  console.log("123")
  return (
  <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center',flex:1}}>
    <Text>{props.userName}</Text>
  </View>
    );
})
export default TestJs;
