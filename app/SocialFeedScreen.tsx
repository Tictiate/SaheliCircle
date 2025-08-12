import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const feedData = [
	{
		id: '1',
		user: 'Helena',
		group: 'Group name',
		time: '3 min ago',
		image: require('../assets/flowers.png'),
		description: 'Post description',
		likes: 21,
		comments: 4,
	},
	{
		id: '2',
		user: 'Daniel',
		group: 'Group Name',
		time: '2 hrs ago',
		image: null,
		description:
			'Body text for a post. Since it’s a social app, sometimes it’s a hot take, and sometimes it’s a question.',
		likes: 6,
		comments: 18,
	},
];

export default function SocialFeedScreen() {
	const router = useRouter();

	const renderItem = ({ item }: any) => (
		<View style={styles.postContainer}>
			<View style={styles.postHeader}>
				<Text style={styles.author}>{item.user}</Text>
				<Text style={styles.meta}>
					{' '}
					in {item.group} · {item.time}
				</Text>
			</View>
			{item.image && <Image source={item.image} style={styles.postImg} />}
			<Text style={styles.description}>{item.description}</Text>
			<View style={styles.postFooter}>
				<TouchableOpacity style={styles.iconRow}>
					<Ionicons name="heart-outline" size={18} />
					<Text style={styles.iconText}>{item.likes} likes</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconRow}>
					<Ionicons name="chatbubble-outline" size={18} />
					<Text style={styles.iconText}>{item.comments} comments</Text>
				</TouchableOpacity>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			{/* Top Tabs */}
			{/* <View style={styles.tabs}>
        <Text style={styles.tabInactive}>Following</Text>
        <Text style={styles.tabActive}>For you</Text>
        <Text style={styles.tabInactive}>Favorites</Text>
      </View> */}
			{/* Feed */}
			<FlatList
				data={feedData}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
			{/* Bottom Navigation Placeholder */}
			<View style={styles.navBar}>
				<TouchableOpacity onPress={() => router.push('/SocialFeedScreen')}>
					<Ionicons name="home" size={24} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => router.push('/ActivitesScreen')}>
					<Ionicons name="add-circle-outline" size={24} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => router.push('/Chat')}>
					<Ionicons name="chatbubbles-outline" size={24} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => router.push('/SignInScreen')}>
					<Ionicons name="person-outline" size={24} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#fff' },
	tabs: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 16,
		borderBottomWidth: 1,
		borderColor: '#eee',
	},
	tabInactive: { color: '#999', fontWeight: '500' },
	tabActive: { color: '#000', fontWeight: '700', textDecorationLine: 'underline' },
	postContainer: { padding: 16, borderBottomWidth: 1, borderColor: '#eee' },
	postHeader: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 8 },
	author: { fontWeight: 'bold', fontSize: 14 },
	meta: { color: '#888', fontSize: 12, marginLeft: 4 },
	postImg: { width: '100%', height: 170, borderRadius: 8, marginBottom: 8 },
	description: { marginBottom: 8, fontSize: 15 },
	postFooter: { flexDirection: 'row', justifyContent: 'flex-start' },
	iconRow: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
	iconText: { marginLeft: 4, fontSize: 13 },
	navBar: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingVertical: 12,
		borderTopWidth: 1,
		borderColor: '#eee',
	},
});
