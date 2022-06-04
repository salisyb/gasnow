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

export default function SignUp({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/images/background_image.png')}
        style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={styles.contentWrapper}>
          <Text style={styles.headerText}>Register.</Text>
          <Text style={styles.subtitleText}>Create your account</Text>
          <View style={styles.formWrapper}>
            <Input placeholder="Full name" label="YOUR NAME" />
            <Text />
            <Input placeholder="Email Address" label="YOUR EMAIL" />
            <View style={{marginTop: hp(15)}}>
              <Input placeholder="Password" label="PASSWORD" icon={'eye'} />
            </View>
            <View style={{marginTop: hp(15)}}>
              <Input
                placeholder="Password Again"
                label="PASSWORD AGAIN"
                icon={'eye'}
              />
            </View>
            <View style={{marginTop: hp(15), marginBottom: hp(27)}}></View>
            <Button
              title="Register"
              onPress={() => navigation.navigate('HomeScreen')}
            />
          </View>

          <View
            style={{
              marginTop: hp(27),
              marginBottom: hp(20),
              alignItems: 'center',
            }}>
            <Link
              linkTitle="I have an account"
              onLink={() => navigation.navigate('SignIn')}
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
});
