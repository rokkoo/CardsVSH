import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

import { Colors } from '../constants';
import { Title, MainText } from '../shredStyles';

import Card from '../components/Card';
import Login from './login';
import useAppContext from '../hooks/useAppContext';

const selectedCard = [
   { user: 'asd', card: [{ text: 'asd', id: 0 }] },
   { user: 'asd', card: [{ text: 'asd', id: 0 }] },
   { user: 'asd', card: [{ text: 'asd', id: 0 }] },
   { user: 'asd', card: [{ text: 'asd', id: 0 }] },
   { user: 'asd', card: [{ text: 'asd', id: 0 }] },
   { user: 'asd', card: [{ text: 'asd', id: 0 }] },
];

const Screen = () => {
   const { state } = useAppContext();
   const { userName } = state;

   return userName ? (
      <ScrollView>
         <View style={styles.header}>
            <View style={styles.userCountContianer}>
               <MaterialIcons
                  name="person-outline"
                  size={24}
                  color={Colors.gray}
               />
               <Text style={{ color: Colors.gray, letterSpacing: 2 }}>
                  /{selectedCard.length}
               </Text>
            </View>
            <Text style={styles.userName}>{userName}</Text>
         </View>
         <View style={styles.timerContianer}>
            <MaterialCommunityIcons
               name="timer"
               size={34}
               color={Colors.dark}
            />
            <Text style={styles.timerText}>57s</Text>
         </View>
         <Text style={styles.title}>
            Cuando sea millonario, levantaré una estatua de 20 metros en
            conmemoración de _____.
         </Text>
         <View style={styles.cardPlaceHolderList}>
            {selectedCard &&
               selectedCard.map(({ card }, key) => (
                  <View key={key} style={styles.cardPlaceHolder}>
                     <Text>{card.text}</Text>
                  </View>
               ))}
         </View>
         <ScrollView horizontal={true}>
            <View style={styles.cardList}>
               <Card id={1} text="Toma dos tazas" />
               <Card id={1} text="Toma dos tazas" />
               <Card id={1} text="Toma dos tazas" />
               <Card id={1} text="Toma dos tazas" />
            </View>
         </ScrollView>
      </ScrollView>
   ) : (
      <Login />
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.dark,
      paddingTop: 32,
      paddingLeft: 10,
      paddingRight: 10,
   },
   header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   userCountContianer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   title: {
      ...Title,
      justifyContent: 'center',
      textAlign: 'center',
   },
   timerContianer: {
      justifyContent: 'center',
      // alignItems: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#dcdde1',
      padding: 8,
      borderRadius: 6,
      marginBottom: 10,
   },
   timerText: {
      ...MainText,
      paddingHorizontal: 10,
      fontWeight: '100',
   },
   cardList: {
      flexDirection: 'row',

      height: 200,
   },
   cardPlaceHolderList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 20,
   },
   cardPlaceHolder: {
      backgroundColor: Colors.light,
      width: 40,
      height: 50,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,

      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
   },
   userName: {
      color: Colors.light,
      fontSize: 16,
   },
});

export default Screen;
