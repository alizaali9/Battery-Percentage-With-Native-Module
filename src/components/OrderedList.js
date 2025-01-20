import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderedList = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.index}>{index + 1}.</Text>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  index: {
    marginRight: 5,
    fontSize: 10,
    color: '#FFFFFF'
  },
  itemText: {
    flex: 1,
    fontSize: 10,
    color: '#FFFFFF'
  },
});

export default OrderedList;
