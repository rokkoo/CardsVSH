import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

// Hooks
import useAppContext from '../../hooks/useAppContext';
import { Colors } from '../../constants';

const Login = () => {
   const [name, setName] = useState('');
   const { setUsername } = useAppContext();

   return (
      <View>
         <TextInput
            style={{ backgroundColor: Colors.light, padding: 10 }}
            value={name}
            onChangeText={(text) => setName(text)}
         />
         <Button
            title="Entrar"
            onPress={() => setUsername({ userName: name })}
         />
      </View>
   );
};

export default Login;
