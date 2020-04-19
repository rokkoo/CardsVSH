import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { Colors } from './constants';
import Screens from './screens';

import { AppProvider } from './context/AppContext';

const fetchFont = () => {
   return Font.loadAsync({
      HappyMonkey: require('./assets/Font/HappyMonkey-Regular.ttf'),
   });
};

export default function App() {
   const [dataLoad, setDataLoad] = useState(false);

   if (!dataLoad) {
      return (
         <AppLoading
            startAsync={fetchFont}
            onFinish={() => setDataLoad(true)}
         />
      );
   }

   return (
      <AppProvider>
         <SafeAreaView style={styles.container}>
            <Screens />
         </SafeAreaView>
      </AppProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.dark,
      paddingTop: 32,
      paddingLeft: 10,
      paddingRight: 10,
   },
});
