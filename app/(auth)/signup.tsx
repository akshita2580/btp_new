import { View, Text, TextInput, TouchableOpacity, StyleSheet, useWindowDimensions, Platform, Image } from 'react-native';
import { Link, router } from 'expo-router';


export default function SignUp() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  const handleSignUp = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      {!isSmallScreen && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1024' }}
            style={styles.backgroundImage}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Guardian</Text>
            <Text style={styles.imageSubtitle}>Your safety companion</Text>
          </View>
        </View>
      )}
      
      <View style={[styles.content, !isSmallScreen && styles.contentWide]}>
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join our community of safety-conscious individuals</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#666"
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          <Link href="/(auth)/signin" asChild>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Sign In Instead</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    display: 'none',
    // '@media (min-width: 768px)': {
    //   display: 'flex',
    // },
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    fontSize: 48,
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    marginBottom: 16,
  },
  imageSubtitle: {
    fontSize: 24,
    fontFamily: 'Inter_400Regular',
    color: '#fff',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentWide: {
    maxWidth: 480,
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 48,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter_700Bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#666',
  },
  form: {
    gap: 16,
  },
  input: {
    height: Platform.OS === 'web' ? 52 : 44,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    backgroundColor: '#F8FAFC',
  },
  button: {
    height: Platform.OS === 'web' ? 52 : 44,
    backgroundColor: '#FF1493',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  dividerText: {
    color: '#666',
    paddingHorizontal: 16,
    fontFamily: 'Inter_400Regular',
  },
  secondaryButton: {
    height: Platform.OS === 'web' ? 52 : 44,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#333',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
});