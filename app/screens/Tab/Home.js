import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import CardComponent from '../../components/CardComponent';
import {hp, wp} from '../../config/dpTopx';
// import TitleTextComponent from '../components/TitleTextComponent';

const DATA = [
  {
    id: 1,
    iconName: 'mail',
    title: 'Emergency',
    subtitle: 'List of emergency phone numbers',
  },
  {
    id: 2,
    iconName: 'eye',
    title: 'Info & Tips',
    subtitle: 'Know something? Say something',
  },
  {
    id: 3,
    iconName: 'alert-circle',
    title: 'Happening Now',
    subtitle: "What's happening in your area?",
  },
  {
    id: 4,
    iconName: 'message-circle',
    title: 'Education',
    subtitle: 'How can we help in the education sector?',
  },
];

const Item = ({item}) => (
  <CardComponent
    cardItem={item}
    iconName={item.iconName}
    cardStyle={{
      marginRight: 10,
      marginBottom: 10,
      backgroundColor: 'green',
    }}
  />
);

export default function Home({navigation}) {
  const renderItem = ({item}) => <Item item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderComponent />
      </View>
      <Text />
      <View style={styles.container2}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    flex: 1,
  },
  container2: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#264653',
    width: '100%',
    height: hp(297),
    paddingHorizontal: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  textEmergencyAssistance: {
    paddingVertical: 10,
  },
});
