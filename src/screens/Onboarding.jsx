import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Dimensions,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {slides} from '../data';
import {Colors, FontFamily, FontSize} from '../GlobalStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

const Slide = ({item}) => (
  <View style={{width, height}}>
    <Image
      source={item?.image}
      style={{height: '100%', width: '100%', resizeMode: 'cover'}}
    />
    <View style={styles.overlay} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item?.title}</Text>
    </View>
  </View>
);

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const handleScroll = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    if (newIndex !== currentSlideIndex) {
      setCurrentSlideIndex(newIndex);
    }
  };

  const Footer = () => (
    <View style={styles.footerContainer}>
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentSlideIndex && {
                backgroundColor: Colors.Light_4,
              },
            ]}
          />
        ))}
      </View>
      <View style={{marginBottom: 20, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={[
            styles.btn,
            {
              borderColor: Colors.Light_4,
              borderWidth: 1,
              backgroundColor: 'transparent',
            },
          ]}>
          <Text style={{color: Colors.Light_4, fontSize: FontSize.B1_Bold}}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{width: 15}} />
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={[styles.btn, {backgroundColor: Colors.Light_4}]}>
          <Text
            style={{color: Colors.Purple_2_Base, fontSize: FontSize.B1_Bold}}>
            Get started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <StatusBar backgroundColor={Colors.white} />
      <FlatList
        onScroll={handleScroll}
        data={slides}
        renderItem={({item}) => <Slide item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16} // to improve scroll performance
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    color: Colors.Light_4,
    fontSize: FontSize.H4_Light,
    fontFamily: FontFamily.H4_bold,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    height: hp(31),
  },
  footerContainer: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: Colors.Dark_2,
    borderRadius: 7,
    marginHorizontal: 5,
    marginBottom: 40,
  },
  btn: {
    flex: 1,
    height: 48,
    borderRadius: 7,
    backgroundColor: Colors.Orange_1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
