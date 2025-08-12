import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [message, setMessage] = useState('Welcome to SaheliCircle!');
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Button title="Change Message" onPress={() => setMessage('You clicked the button!')} />
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('SignInScreen')}
      >
        <Text style={{ color: 'blue' }}>Go to Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
  },
});
