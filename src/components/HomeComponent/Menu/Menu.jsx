import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import {styles} from './style';
import {Genres} from '@/utilities/references';
import { useNavigation } from '@react-navigation/native';

const Menu = ({selectedMenu, value,toggle}) => {
  const navigation = useNavigation();
  const navLogin = () =>{
    toggle();
    navigation.navigate('Start');
  };
  return (
    <View style={styles.menu}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarImage}>
          <Avatar.Image source={require('@/assets/avatar.png')} />
          <Text style={[styles.text, styles.textUser]}>Shah Djahan</Text>
        </View>
        <TouchableOpacity>
          <Icon name="exchange" color="white" size={25} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity style={styles.textWithIcon}>
          <View style={styles.withIcon}>
            <Icon
              style={styles.iconWithText}
              name="download"
              color="white"
              size={28}
            />
            <Text style={styles.text}>My Download</Text>
          </View>
          <Icon
            style={styles.rightIcon}
            name="angle-right"
            color="white"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.textWithIcon}>
          <View style={styles.withIcon}>
            <IonIcons
              style={styles.iconWithText}
              name="md-checkmark"
              color="white"
              size={28}
            />
            <Text style={styles.text}>My List</Text>
          </View>
          <Icon
            style={styles.rightIcon}
            name="angle-right"
            color="white"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            value === 'INICIO'
              ? [styles.items, styles.itemsSelected]
              : [styles.items]
          }
          onPress={() => selectedMenu('INICIO')}>
          <Text style={styles.text}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            value === Genres.Action
              ? [styles.items, styles.itemsSelected]
              : [styles.items]
          }
          onPress={() => selectedMenu(Genres.Action)}>
          <Text style={styles.text}>Acción</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            value === Genres.Drama
              ? [styles.items, styles.itemsSelected]
              : [styles.items]
          }
          onPress={() => selectedMenu(Genres.Drama)}>
          <Text style={styles.text}>Drama</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            value === Genres.Family
              ? [styles.items, styles.itemsSelected]
              : [styles.items]
          }
          onPress={() => selectedMenu(Genres.Family)}>
          <Text style={styles.text}>Familiar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            value === Genres.Comedy
              ? [styles.items, styles.itemsSelected]
              : [styles.items]
          }
          onPress={() => selectedMenu(Genres.Comedy)}>
          <Text style={styles.text}>Comedias</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            value === Genres.Documental
              ? [styles.items, styles.itemsSelected]
              : [styles.items]
          }
          onPress={() => selectedMenu(Genres.Documental)}>
          <Text style={styles.text}>Documentales</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            value === Genres.Original
              ? [styles.items, styles.itemsSelected]
              : [styles.items]
          }
          onPress={() => selectedMenu(Genres.Fantasy)}>
          <Text style={styles.text}>Fantasia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            value === Genres.Horror
              ? [styles.items, styles.itemsSelected]
              : [styles.items]
          }
          onPress={() => selectedMenu(Genres.Horror)}>
          <Text style={styles.text}>Terror</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            value === Genres.ScienceFiction
              ? [styles.items, styles.itemsSelected]
              : [styles.items]
          }
          onPress={() => selectedMenu(Genres.ScienceFiction)}>
          <Text style={styles.text}>Ciencia Ficción</Text>
        </TouchableOpacity>
        <></>
        <TouchableOpacity
          style={[styles.items,styles.logout]}
          onPress={() => navLogin()}>
          <Text style={styles.text}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Menu;
