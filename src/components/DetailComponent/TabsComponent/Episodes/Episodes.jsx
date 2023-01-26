import { removeHtmlTags } from '@/utilities/lib';
import React from 'react';
import {
	ImageBackground, Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './style';

const Episodes = ({episodes, season}) => {
  const renderEpisodes = () => {
    const res = episodes?.map((item, i) => {
      if (season === item.season) {
        return (
          <View style={styles.containerVideo} key={i}>
            <View style={styles.video}>
              <ImageBackground
                style={styles.image}
                source={item.image === null ? require('@/assets/Netflix-logo.png') : { uri: item.image?.original}}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity>
                    <View style={styles.iconPlayContainer}>
                      <Icon
                        style={styles.iconPlay}
                        name="play-circle"
                        size={30}
                        color="white"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
              <View style={styles.episodeName}>
                <Text style={styles.textTitle}>
                  {item.number}. {item.name}
                </Text>
                <Text style={styles.textTitle}>{item.runtime}. minutes</Text>
              </View>
            </View>
            {/* <Text style={styles.summary}>{data[i]}</Text> */}
            <Text style={styles.summary}>{removeHtmlTags(item.summary)}</Text>
          </View>
        );
      }
    });
    return res;
  };

  return <View style={styles.container}>{renderEpisodes()}</View>;
};

export default Episodes;
