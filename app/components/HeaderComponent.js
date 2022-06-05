import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors';
import {hp, wp} from '../config/dpTopx';
import Button from './Button';

function HeaderComponent(props) {
  const sendTipsAlert = () => {
    alert('Send tips');
  };

  return (
    <View>
      <View style={styles.logo}>
        <View style={styles.logoHeader}>
          <Image
            style={styles.imageR}
            source={require('../../assets/images/gasnow_logo.png')}
          />

          <Text style={styles.nedcA}>{'GasNowPay'}</Text>
        </View>
        <View style={styles.wrapProfile}>
          <View style={styles.featherIcon}>
            <TouchableOpacity>
              <Feather
                style={styles.featherIcon}
                color={colors.primary}
                name="bell"
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                style={styles.featherIcon}
                color={colors.primary}
                name="mail"
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                style={styles.featherIcon}
                name="user"
                color={colors.primary}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.welcomeTitle}>
        <Button style={{borderRadius: 10}} title="Welcome to GasNowPayLater" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    marginLeft: hp(10),
    marginTop: hp(20),
    flexDirection: 'row',
    width: wp(322),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoHeader: {
    flexDirection: 'row',
  },
  imageR: {
    borderRadius: 20,
    width: wp(30),
    height: wp(30),
    resizeMode: 'contain',
  },
  nedcA: {
    marginTop: hp(5),
    marginLeft: hp(6),
    // fontFamily: 'Lato-Black',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
    // letterSpacing: 2,
  },
  wrapProfile: {
    marginLeft: hp(110),
    marginTop: hp(10),
    flexDirection: 'row',
  },
  featherIcon: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  welcomeTitle: {
    width: '100%',
    marginTop: 50,
    marginLeft: 10,
  },
  textTitleEA: {
    marginVertical: 10,
    fontSize: 18,
    color: 'white',
    // fontFamily: 'Lato-Black',
  },
  textSubTitle: {
    fontSize: 14,
    color: 'white',
  },
  headerButtons: {
    flexDirection: 'row',
  },
  sendTips: {
    backgroundColor: 'red',
  },
});
export default HeaderComponent;
