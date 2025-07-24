import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [message, setMessage] = useState('Welcome to SaheliCircle!');

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Button title="Change Message" onPress={() => setMessage('You clicked the button!')} />
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
