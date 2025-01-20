import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, disabled && styles.disabled]}
      onPress={!disabled ? onPress : null}
      activeOpacity={disabled ? 1 : 0.7}
    >
      <LinearGradient
        colors={['#5470FE', '#FA67C6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Dimensions.get('screen').width,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default CustomButton;
