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
import React from 'react';
import {Colors, FontFamily, FontSize} from '../GlobalStyles';

const {height, width} = Dimensions.get('window');

const Slide = ({item}) => {
  return (
    <View style={{width, height}}>
      <Image
        source={item?.image}
        style={{height: '100%', width: '100%', resizeMode: 'cover'}}
      />
      {/* text overlay */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item?.title}</Text>
      </View>
    </View>
  );
};

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const Footer = () => {
    return (
      <View style={styles.footerContainer}>
        {/* indicator container */}
        <View style={styles.indicatorContainer}>
          {/* render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentSlideIndex && {
                  backgroundColor: Colors.Light_4,
                },
              ]}></View>
          ))}
        </View>
        <View style={{marginBottom: 20}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <StatusBar backgroundColor={Colors.white} />
      <FlatList
        data={slides}
        renderItem={({item}) => <Slide item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      {/* Render footer component here */}
      <Footer />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    bottom: 100, // Position title above footer
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: Colors.Light_4,
    fontSize: FontSize.H4_Light,
    fontFamily: FontFamily.H4_Regular,
    textShadowOffset: {width: 4, height: 1},
    textShadowRadius: 15,
    fontWeight: 'regular',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 16, // Position footer at the bottom
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    // color: Colors.Light_0,
  },
  indicator: {
    height: 10,
    width: 10, // Adjust the size of the indicator
    backgroundColor: Colors.Dark_2,
    borderRadius: 7,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonContainer: {},
});
