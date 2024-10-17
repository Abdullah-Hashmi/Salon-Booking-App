import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Dimensions,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import {slides} from '../data';
import React from 'react';
import {Colors, FontFamily, FontSize} from '../GlobalStyles';

const {height, width} = Dimensions.get('window');

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{width: width, height: '75%', resizeMode: 'contain'}}
      />

      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const Onboarding = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <StatusBar backgroundColor={Colors.white} />
      <FlatList
        data={slides}
        contentContainerStyle={{height: height * 0.75}}
        renderItem={({item}) => <Slide item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
