import React from 'react'
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

export default function Task({nombre}) {
  return (
    <View style={styles.task}>
      <View style={styles.taskContainer}> 
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.text}> {nombre} </Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 16,
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  square:{
    backgroundColor: '#55BCF6',
    width: 24,
    height: 24,
    marginRight: 12,
    borderRadius: 5,
  },

  text: {
    maxWidth: '80%'
  },
  
  circle: {
    width: 18,
    height: 18,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 50,
  }

})