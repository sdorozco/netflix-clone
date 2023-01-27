import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Api} from '../../services/api';
import {styles} from './style';
const SearchComponent = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState({
    data: '',
    text: '',
  });
  const [data, setDataBackend] = useState({});
  const filter = text => {
    const newData = data.filter(function (item) {
      const itemData = item.name?.toUpperCase();
      const textData = text?.toUpperCase();
      return itemData?.indexOf(textData) > -1;
    });
    setInput({
      data: newData,
      text: text,
    });
  };
  const newPushContent = item => {
    navigation.navigate('Detail', {data: item});
  };
  const deleteData = () => {
    setInput({data: '', text: ''});
  };

  const renderItem = item => {
    return (
      <TouchableWithoutFeedback onPress={() => newPushContent(item)}>
        <Image key={item.id} style={styles.image} source={{uri: item.image}} />
      </TouchableWithoutFeedback>
    );
  };

  const userApi = () => {
    Api('shows', 'get')
      .then(response => {
        setDataBackend(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    userApi();
    console.log(input.data);
  }, [input.data]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="search" color="grey" size={18} style={styles.searchIcon} />
        <TextInput
          onChangeText={text => filter(text)}
          placeholder="Buscar"
          placeholderTextColor="grey"
          style={styles.input}
          value={input.text}
          keyboardAppearance="dark"
          autoFocus
          autoCapitalize="none"
        />
        {input.text ? (
          <TouchableWithoutFeedback onPress={() => deleteData()}>
            <Icon
              name="times-circle"
              color="grey"
              size={18}
              style={styles.iconInputClose}
            />
          </TouchableWithoutFeedback>
        ) : null}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.navigate('Home')}>
          <View style={styles.containerButton}>
            <Text style={styles.textCancel}>Cancelar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={input.data}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
};

export default SearchComponent;
