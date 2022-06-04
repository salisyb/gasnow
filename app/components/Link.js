import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {hp} from '../config/dpTopx';

export default function Link({onLink = () => {}, linkTitle = 'link'}) {
  return (
    <TouchableOpacity onPress={onLink}>
      <Text style={styles.linkStyle}>{linkTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linkStyle: {
    fontSize: hp(16),
    fontWeight: 'bold',
  },
});
