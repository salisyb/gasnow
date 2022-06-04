import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import {hp, wp} from '../config/dpTopx';
import Link from '../components/Link';
import colors from '../../assets/colors';

export default function ForgotPasswordOtp({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/images/background_image.png')}
        style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={styles.contentWrapper}>
          <Text style={styles.headerText}>Forgot Password?</Text>
          <Text style={styles.subtitleText}>Recover your account</Text>
          <View style={styles.formWrapper}>
            <Text style={styles.instruction}>
              Please check your email{' '}
              <Text style={{color: colors.secondary}}>
                bappikabir@email.com{' '}
              </Text>
              on instruction on how to complete your password reset
            </Text>
            <Text />
            <Button
              title="Go to Login"
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>

          <View
            style={{
              marginTop: hp(100),
              marginBottom: hp(20),
              alignItems: 'center',
            }}>
            <Link
              linkTitle="Did not receive an email"
              //   onLink={() => navigation.navigate('SignIn')}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(30),
    paddingVertical: 20,
  },
  contentWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: wp(30),
    backgroundColor: colors.background,
  },

  formWrapper: {
    marginTop: hp(57),
    width: '100%',
  },
  headerText: {
    marginTop: hp(60),
    fontSize: hp(24),
    fontWeight: 'bold',
  },
  subtitleText: {
    marginTop: hp(10),
    fontSize: hp(16),
    fontWeight: '300',
  },
  instruction: {
    fontSize: hp(18),
  },
});
