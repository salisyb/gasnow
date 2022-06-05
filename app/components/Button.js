import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import {hp, wp} from '../config/dpTopx';

export default function Button({style, onPress = () => {}, title = 'Label'}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    height: hp(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: hp(16),
    fontWeight: 'bold',
    color: colors.black,
  },
});
