import data from '@/data/data';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Api } from '../../../services/api';
import { styles } from './style';

const List = ({genero}) => {
  const navigator = useNavigation();
  const [dataBackend, setDataBackend] = useState({});

  const newPushContent = item => {
    navigator.navigate('Detail', {data: item});
  };

  const renderItem = (item, i) => {
    return (
      <TouchableWithoutFeedback onPress={() => newPushContent(item)}>
        <Image key={i} style={styles.image} source={{uri: item.image}} />
      </TouchableWithoutFeedback>
    );
  };
  const renderItemMovie = (item, i) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => newPushContent(item)}>
        <Image
          key={item.id}
          style={styles.image}
          source={{uri: item ? item.image : ''}}
        />
      </TouchableWithoutFeedback>
    );
  };
  const userApi = () => {
    Api('shows', 'get')
      .then(response => {
        const info = response.data.filter(function (element) {
         // eslint-disable-next-line dot-notation
         return genero === 'INICIO' ? element : element['details'].genres[0] === genero;
        });
        setDataBackend(info);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    userApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genero]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>My List</Text>
        <FlatList
          horizontal
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}) => renderItem(item)}
          data={data}
        />
      </View>
      <View>
        <Text style={styles.text}>{genero === 'INICIO' ? 'My Top List' : genero}</Text>
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}, i) => renderItemMovie(item, item.key)}
          data={dataBackend}
          horizontal
        />
      </View>
    </View>
  );
};

export default List;
