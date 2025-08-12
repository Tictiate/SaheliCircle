import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const conversation = [
  { id: 1, from: 'them', text: 'This is the main chat template', time: '9:41 AM' },
  { id: 2, from: 'me', text: 'Oh?' },
  { id: 3, from: 'me', text: 'Cool' },
  { id: 4, from: 'me', text: 'How does it work?' },
  { id: 5, from: 'them', text: 'You just edit any text to type in the conversation you want to show, and delete any bubbles you don\'t want to use' },
  { id: 6, from: 'me', text: 'Hmmm' },
  { id: 7, from: 'me', text: 'I think I get it' },
  { id: 8, from: 'me', text: "Will head to the Help Center if I have more questions tho" },
];

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>AI Chatbot</Text>
      <ScrollView style={styles.chatArea}>
        {conversation.map(msg => (
          <View key={msg.id} style={[styles.bubble, msg.from === 'me' ? styles.right : styles.left]}>
            <Text style={styles.bubbleText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Boom!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  header: { fontWeight: 'bold', fontSize: 18, alignSelf: 'center', marginVertical: 10 },
  chatArea: { flex: 1, padding: 10 },
  bubble: { padding: 10, marginVertical: 6, borderRadius: 18, maxWidth: '75%' },
  left: { alignSelf: 'flex-start', backgroundColor: '#efefef' },
  right: { alignSelf: 'flex-end', backgroundColor: '#dbf6e9' },
  bubbleText: { fontSize: 15 },
  button: { alignSelf: 'flex-end', paddingVertical: 8, paddingHorizontal: 18, backgroundColor: '#181818', borderRadius: 14, margin: 15 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});
