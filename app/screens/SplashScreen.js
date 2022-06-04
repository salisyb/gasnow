import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {hp, wp} from '../config/dpTopx';
import colors from '../../assets/colors';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 5000);
  });
  return (
    <ImageBackground
      //   source={require('../../assets/images/background_image.png')}
      blurRadius={5}
      style={styles.container}>
      <Image
        source={require('../../assets/images/gasnow_logo.png')}
        style={{
          width: wp(70),
          height: hp(150),
          marginBottom: hp(20),
        }}
      />
      <Text style={styles.title}>GasnowPay</Text>
      <Text style={styles.subtitle}>www.gasnowpay.com.ng</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: hp(30),
    color: colors.primary,
  },
  subtitle: {
    color: colors.primary,
    fontSize: hp(16),
  },
});
