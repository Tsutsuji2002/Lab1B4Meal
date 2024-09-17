import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton = ({ onPress, iconName, color, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, style]}>
    <Ionicons name={iconName} size={23} color={color || 'white'} />
  </TouchableOpacity>
);

const CustomHeaderButtons = ({ children }) => (
  <View style={styles.headerButtons}>{children}</View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 10,
  },
  headerButtons: {
    flexDirection: 'row',
  },
});

export { CustomHeaderButton, CustomHeaderButtons };