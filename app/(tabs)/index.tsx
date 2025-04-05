import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, Platform } from 'react-native';
import { Bell, Phone, Mic, MapPin, Bot, UserPlus } from 'lucide-react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  const handleUpdateContacts = () => {
    router.push('/(tabs)/');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, !isSmallScreen && styles.headerWide]}>
        <Text style={styles.welcomeText}>Welcome to the LolaLand!</Text>
      </View>

      <View style={[styles.content, !isSmallScreen && styles.contentWide]}>
        <View style={[styles.grid, !isSmallScreen && styles.gridWide]}>
          <TouchableOpacity style={[styles.gridItem, !isSmallScreen && styles.gridItemWide]}>
            <View style={[styles.iconContainer, { backgroundColor: '#FFE4E4' }]}>
              <Bell size={24} color="#FF4444" />
            </View>
            <Text style={styles.gridItemText}>SOS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, !isSmallScreen && styles.gridItemWide]}>
            <View style={[styles.iconContainer, { backgroundColor: '#E4F1FF' }]}>
              <Phone size={24} color="#4477FF" />
            </View>
            <Text style={styles.gridItemText}>Emergency{'\n'}SMS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, !isSmallScreen && styles.gridItemWide]}>
            <View style={[styles.iconContainer, { backgroundColor: '#FFE4FF' }]}>
              <Mic size={24} color="#FF44FF" />
            </View>
            <Text style={styles.gridItemText}>Record{'\n'}Audio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, !isSmallScreen && styles.gridItemWide]}>
            <View style={[styles.iconContainer, { backgroundColor: '#E4FFE4' }]}>
              <MapPin size={24} color="#44FF44" />
            </View>
            <Text style={styles.gridItemText}>Track Me</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, !isSmallScreen && styles.gridItemWide]}>
            <View style={[styles.iconContainer, { backgroundColor: '#FFF4E4' }]}>
              <Bot size={24} color="#FFAA44" />
            </View>
            <Text style={styles.gridItemText}>ShieldMate{'\n'}Bot</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.gridItem, !isSmallScreen && styles.gridItemWide]}
            onPress={handleUpdateContacts}
          >
            <View style={[styles.iconContainer, { backgroundColor: '#F4E4FF' }]}>
              <UserPlus size={24} color="#AA44FF" />
            </View>
            <Text style={styles.gridItemText}>Update{'\n'}Contacts</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  contentWide: {
    maxWidth: 1024,
    alignSelf: 'center',
    width: '100%',
    padding: 24,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'web' ? 24 : 60,
    paddingBottom: 24,
    backgroundColor: '#FF1493',
  },
  headerWide: {
    paddingTop: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    gap: 12,
  },
  gridWide: {
    padding: 0,
    gap: 24,
  },
  gridItem: {
    width: '31%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gridItemWide: {
    width: 'calc(33.333% - 16px)',
    aspectRatio: undefined,
    height: 200,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  gridItemText: {
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
    color: '#333',
    textAlign: 'center',
  },
});