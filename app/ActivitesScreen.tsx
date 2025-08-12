import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';

const activities = [
  { id: '1', user: 'starryskies23', desc: 'Started following you', time: '1d', img: require('../assets/images/SaheliCircle-logo.png') },
  { id: '2', user: 'nebula nomad', desc: 'Liked your post', time: '1d', img: require('../assets/images/SaheliCircle-logo.png') },
  { id: '3', user: 'emberecho', desc: 'Liked your comment\nHappy birthday!!! 🎉🎉', time: '2d', img: require('../assets/images/SaheliCircle-logo.png') },
  { id: '4', user: 'lunavoyager', desc: 'Saved your post', time: '2d', img: require('../assets/images/SaheliCircle-logo.png') },
  { id: '5', user: 'shadowlynx', desc: 'Commented on your post\ni’m going in September.', time: '4d', img: require('../assets/images/SaheliCircle-logo.png') },
  // ...more
];

export default function ActivitiesScreen() {
  const renderItem = ({ item }: any) => (
    <View style={styles.activityItem}>
      <Image source={item.img} style={styles.avatar} />
      <View style={styles.activityText}>
        <Text style={styles.user}>{item.user} </Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
      <TouchableOpacity style={styles.categoryBtn}>
        <Text style={styles.categoryBtnText}>Button</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Category Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryTabs}>
        <TouchableOpacity><Text style={styles.catBtn}>Category</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.catBtn}>Category</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.catBtn}>Category</Text></TouchableOpacity>
      </ScrollView>
      {/* Activity List */}
      <FlatList data={activities} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  categoryTabs: { flexDirection: 'row', padding: 10 },
  catBtn: { backgroundColor: '#f3f3f3', borderRadius: 16, padding: 8, marginHorizontal: 6 },
  activityItem: { flexDirection: 'row', alignItems: 'center', padding: 14, borderBottomWidth: 1, borderColor: '#eee' },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  activityText: { flex: 1 },
  user: { fontWeight: 'bold', fontSize: 15 },
  desc: { color: '#444', fontSize: 14 },
  time: { color: '#aaa', fontSize: 12, marginLeft: 8 },
  categoryBtn: { paddingVertical: 5, paddingHorizontal: 14, backgroundColor: '#181818', borderRadius: 15, marginLeft: 10 },
  categoryBtnText: { color: '#fff', fontWeight: 'bold' }
});
