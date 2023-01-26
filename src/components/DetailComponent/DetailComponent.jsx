import { removeHtmlTags } from '@/utilities/lib';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  ImageBackground,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { styles } from './style';
import Episodes from './TabsComponent/Episodes/Episodes';

const DetailComponent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params.data;
  const description = removeHtmlTags(data.details?.description);
  const numEpisodes = data.details?.episodes.length;
  const season = data.details?.episodes[numEpisodes - 1].season;

  const [measures, setMeasures] = useState(0);
  const [measuresSeason, setMeasuresSeason] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [selectSeason, setSelectSeason] = useState(0);
  const seasonCount = useState([]);
  const onShare = () => {
    Share.share(
      {
        title: 'Suits',
        url: 'www.youtube.com',
        message: 'Serie de TV',
      },
      {
        //android
        dialogTitle: 'Share this Awesome content',
        //IOs
        excludActivityTypes: 'com.apple.UIKit.activity.PostToTwitter',
      },
    );
  };
  const headerNameToggle = scrollY.interpolate({
    inputRange: [measures, measures + 1],
    outputRange: [0, 1],
  });
  const headerSeasonToggle = scrollY.interpolate({
    inputRange: [measuresSeason, measuresSeason + 1],
    outputRange: [0, 1],
  });
  const countSeason = () => {
    if (seasonCount.length <= season) {
      for (let i = 1; i <= season; i++) {
        seasonCount[i - 1] = 'Temporada ' + i;
      }
    }
    return seasonCount;
  };
 
  return (
    <View style={styles.containerGlobal}>
      <Animated.View style={[styles.header, {opacity: headerNameToggle}]}>
        <View>
          <Text style={styles.headerText}>{data.name}</Text>
        </View>
        <View style={styles.animatedButton}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.closeButton}>
            <Icon name="times" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.View
        style={[styles.headerSeason, {opacity: headerSeasonToggle}]}>
        <View style={styles.containerSeason}>
          <SelectDropdown
            data={countSeason()}
            onSelect={(selectedItem, index) => {
              setSelectSeason(index + 1);
              console.log(selectedItem, index);
            }}
            defaultButtonText={selectSeason >= 1 ? seasonCount[selectSeason - 1] : seasonCount[selectSeason]}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <Icon
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#FFF'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />
        </View>
      </Animated.View>

      <Animated.ScrollView
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        style={styles.container}>
        <View>
          <ImageBackground style={styles.thumbnail} source={{uri: data.image}}>
            <View style={styles.closeButton}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="times"
                  size={25}
                  color="white"
                  style={styles.iconPlay}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonPlay}>
              <TouchableOpacity
                onPress={() => navigation.navigate('VideoPlayer')}>
                <View>
                  <Icon
                    name="play-circle"
                    size={80}
                    color="white"
                    style={styles.iconPlay}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={styles.nameContainer}
              onLayout={({nativeEvent}) => {
                setMeasures(nativeEvent.layout.y);
              }}>
              <LinearGradient colors={['transparent', '#181818', '#181818']}>
                <Text style={[styles.text, styles.titleShow]}>{data.name}</Text>
              </LinearGradient>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.subtitle}>
            <Text style={[styles.text, styles.subTitleText]}>
              {data.details?.year}
            </Text>
            <Text style={[styles.text, styles.subTitleText]}>
              {numEpisodes}
            </Text>
            <Text style={[styles.text, styles.subTitleText]}>
              {season} Season
            </Text>
          </View>
          <View style={styles.description}>
            <Text style={[styles.text, styles.light]}>{description}</Text>
          </View>
          <Text style={styles.text}>Cast: </Text>
          <Text style={styles.text}>Creator: </Text>
          <View style={styles.shareListIcon}>
            <View style={styles.myListIcon}>
              <IonIcons name="md-checkmark" color="grey" size={25} />
              <Text style={styles.text}>My List</Text>
            </View>
            <TouchableOpacity onPress={() => onShare()}>
              <View style={styles.myShareIcon}>
                <Icon name="share-alt" color="grey" size={25} />
                <Text style={styles.text}>Share</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View onLayout={({nativeEvent}) => {
            setMeasuresSeason(nativeEvent.layout.y);
          }}>
            <SelectDropdown
              data={countSeason()}
              onSelect={(selectedItem, index) => {
                setSelectSeason(index + 1);
                console.log(selectedItem, index);
              }}
              defaultButtonText={selectSeason >= 1 ? seasonCount[selectSeason - 1] : seasonCount[selectSeason]}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <Icon
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#FFF'}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown2DropdownStyle}
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
            />
        </View>
        <Episodes episodes={data.details?.episodes} season={selectSeason >= 1 ? selectSeason : 1} />
      </Animated.ScrollView>
    </View>
  );
};

export default DetailComponent;
