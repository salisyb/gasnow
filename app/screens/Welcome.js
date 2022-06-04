import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {hp} from '../config/dpTopx';
import colors from '../../assets/colors';
import Button from '../components/Button';
import Link from '../components/Link';

export default function Welcome({navigation}) {
  return (
    <ImageBackground
      //   source={require('../../assets/images/background_image.png')}
      blurRadius={5}
      style={styles.container}>
      <Image />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>GasnowPay</Text>
        <Text style={styles.subtitle}>www.gasnowpay.com.ng</Text>
      </View>
      <Button
        title="Create an Account"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Text />
      <Button
        style={{backgroundColor: colors.secondary}}
        title="Log In"
        onPress={() => navigation.navigate('SignIn')}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 20,
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
