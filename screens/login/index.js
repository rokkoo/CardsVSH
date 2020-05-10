import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

// Hooks
import useAppContext from '../../hooks/useAppContext';
import { Colors } from '../../constants';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { withTimingTransition } from 'react-native-redash';
import Animated, { useCode, cond, eq, set } from 'react-native-reanimated';

const Login = () => {
   const [name, setName] = useState('');
   const { setUsername } = useAppContext();

   const scale = useRef(new Animated.Value(0));

   // TODO: Check this
   const scaleAnimation = withTimingTransition(scale.current);

   useCode(() => cond(eq(scale.current, 0), set(scale.current, 1)), []);

   const handlePress = () => setUsername({ userName: name });

   return (
      <View style={{ ...styles.container }}>
         <Text style={{ ...styles.logo }}>CardsVSH</Text>
         <View style={styles.inputContianer}>
            <TextInput
               style={styles.input}
               value={name}
               onChangeText={(text) => setName(text)}
            />
            <TouchableNativeFeedback
               style={styles.button}
               onPress={handlePress}
            >
               <Text style={styles.buttonText}>Go!</Text>
            </TouchableNativeFeedback>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   logo: {
      fontFamily: 'HappyMonkey',
      color: Colors.light,
      fontSize: 42,
   },
   inputContianer: {
      flexDirection: 'row',
      marginTop: 16,
   },
   input: {
      width: '50%',
      backgroundColor: Colors.light,
      borderWidth: 0,
      padding: 8,
   },
   button: {
      backgroundColor: Colors.green,
      flex: 1,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttonText: {
      color: Colors.dark,
   },
});

export default Login;
