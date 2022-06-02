import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Signin() {
  return (
    <View>
      <Text>signin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(2),
  },
});
