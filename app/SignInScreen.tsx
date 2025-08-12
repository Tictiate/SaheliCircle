import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen() {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/SaheliCircle-logo.png')} style={styles.logo} />
      <Text style={styles.appName}>SaheliCircle</Text>
      <Text style={styles.subheading}>Sign-Up Anonymously</Text>
      <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('SocialFeedScreen')}>
        <Text style={styles.ctaButtonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.mentorLoginLabel}>Mentor Login</Text>
      <Text style={styles.subText}>Enter your email to sign up for this app</Text>
      <TextInput
        placeholder="email@domain.com"
        style={styles.input}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaButtonText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.orDivider}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>
      {/* Social Auth Buttons */}
      <TouchableOpacity style={styles.socialBtn}>
        <Image source={require('../assets/google.png')} style={styles.icon} />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialBtn}>
        <Image source={require('../assets/apple.png')} style={styles.icon} />
        <Text style={styles.socialText}>Continue with Apple</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        By clicking continue, you agree to our Terms of Service and Privacy Policy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 24, paddingTop: 60 },
  logo: { width: 80, height: 80, marginBottom: 18, borderRadius: 40 },
  appName: { fontSize: 22, fontWeight: 'bold', marginBottom: 6 },
  subheading: { fontSize: 15, fontWeight: '500', marginBottom: 16 },
  ctaButton: { backgroundColor: '#181818', borderRadius: 8, paddingVertical: 12, paddingHorizontal: 90, marginBottom: 16 },
  ctaButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  mentorLoginLabel: { marginTop: 14, fontSize: 15, fontWeight: '600' },
  subText: { color: '#666', fontSize: 14, marginBottom: 8 },
  input: { width: '100%', borderColor: '#ccc', borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 12 },
  orDivider: { flexDirection: 'row', alignItems: 'center', width: '100%', marginVertical: 11 },
  line: { flex: 1, height: 1, backgroundColor: '#eee' },
  orText: { marginHorizontal: 12, color: '#888', fontSize: 14 },
  socialBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f3f3', borderRadius: 8, width: '100%', padding: 12, marginBottom: 10 },
  icon: { width: 22, height: 22, marginRight: 12 },
  socialText: { fontSize: 15, fontWeight: 'bold', color: '#333' },
  termsText: { marginTop: 14, color: '#888', fontSize: 13, textAlign: 'center' },
});
