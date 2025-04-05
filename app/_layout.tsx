import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useAuth } from '@/hooks/useAuth';
import { ContactsProvider } from '@/context/ContactsContext';

export default function RootLayout() {
  useFrameworkReady();
  const { user, loading } = useAuth();

  // Show loading screen while checking authentication
  if (loading) {
    return null;
  }

  return (
    <ContactsProvider>
      <>
        {!user ? (
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          </Stack>
        ) : (
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        )}
        <StatusBar style="auto" />
      </>
    </ContactsProvider>
  );
}