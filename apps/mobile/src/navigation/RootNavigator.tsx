import { enableScreens } from 'react-native-screens';

import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';

enableScreens();

export function RootNavigator() {
  const isAuthenticated = false;

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
}
