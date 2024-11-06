import React, {memo} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomMainBotton = ({name, color, onPress, index}) => {
  console.log('Rendering button at index:', index);

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default memo(CustomMainBotton, (prevProps, nextProps) => {
  return prevProps.color === nextProps.color;
});

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
