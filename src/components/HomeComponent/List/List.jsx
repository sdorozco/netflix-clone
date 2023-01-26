import data from "@/data/data";
import {useNavigation} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
  VirtualizedList,
} from "react-native";
import {Api} from "../../../services/api";
import {styles} from "./style";

const List = ({genero}) => {
  const navigator = useNavigation();
  const [dataBackend, setDataBackend] = useState({});
  const getItemCount = info => dataBackend.length;

  const newPushContent = item => {
    navigator.navigate("Detail", {data: item});
  };
  const getItem = (info, index) => {
    return {id: index, data: info};
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
    // return (
    //   <TouchableWithoutFeedback
    //     onPress={() => newPushContent(item.data[item.id])}>
    //     <Image
    //       key={item.id}
    //       style={styles.image}
    //       source={{uri: item.data ? item.data[item.id]["image"] : ""}}
    //     />
    //   </TouchableWithoutFeedback>
    // );
  };
  const userApi = () => {
    Api('shows', 'get')
      .then(response => {
        const info = response.data.filter(function (element) {
         return genero === 'INICIO' ? element : element['details']['genres'][0] === genero;
        });
        setDataBackend(info);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    userApi();
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
        {/* <VirtualizedList
          data={dataBackend}
          horizontal
          getItem={getItem}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}, i) => renderItemMovie(item, item.key)}
        /> */}
        <FlatList
          getItemLayout={(data, index) => (
            {length: 10, offset: 10 * index, index}
          )}
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
