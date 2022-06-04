import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {hp, wp} from '../config/dpTopx';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors';

export default function Input({
  placeholder = 'input',
  label = 'label',
  icon = null,
}) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput placeholder={placeholder} style={styles.input} />
        {icon && <Feather name={icon} size={25} color={colors.primary} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(76),
    justifyContent: 'space-between',
  },
  inputWrapper: {
    width: '100%',
    backgroundColor: '#F9FAFB',
    height: hp(50),
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  label: {
    fontSize: hp(14),
  },
});
