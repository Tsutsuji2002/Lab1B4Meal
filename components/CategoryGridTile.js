import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = ({ title, color, onSelect, orientation }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={onSelect}>
        <View
          style={{
            ...styles.container,
            backgroundColor: color,
            justifyContent: orientation === 'LANDSCAPE' ? 'center' : 'flex-end',
            alignItems: orientation === 'LANDSCAPE' ? 'center' : 'flex-end',
          }}
        >
          <Text
            style={{
              ...styles.title,
              textAlign: orientation === 'LANDSCAPE' ? 'center' : 'right',
              fontSize: orientation === 'LANDSCAPE' ? 20 : 22, // Adjust font size for landscape
            }}
            numberOfLines={2}
          >
            {title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default CategoryGridTile;
