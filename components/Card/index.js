import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MainText } from '../../shredStyles';

const Card = ({ text, id }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>{text}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',

      backgroundColor: 'white',
      padding: 20,
      borderRadius: 6,

      paddingVertical: 32,
      paddingHorizontal: 12,
      marginHorizontal: 12,
      alignItems: 'center',
      width: 200,

      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
   },
   text: {
      ...MainText,
   },
});

export default Card;
