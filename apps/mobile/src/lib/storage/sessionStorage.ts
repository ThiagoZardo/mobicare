import AsyncStorage from '@react-native-async-storage/async-storage';

const sessionTokenKey = 'mobicare.sessionToken';

export async function getSessionToken() {
  return AsyncStorage.getItem(sessionTokenKey);
}

export async function setSessionToken(token: string) {
  await AsyncStorage.setItem(sessionTokenKey, token);
}

export async function clearSessionToken() {
  await AsyncStorage.removeItem(sessionTokenKey);
}
