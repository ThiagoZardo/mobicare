import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DashboardScreen } from '../screens/dashboard/DashboardScreen';
import { FuelRecordScreen } from '../screens/fuel/FuelRecordScreen';
import { MaintenancePlanLoadingScreen } from '../screens/maintenance/MaintenancePlanLoadingScreen';
import { MaintenancePlanScreen } from '../screens/maintenance/MaintenancePlanScreen';
import { FirstVehicleScreen } from '../screens/vehicles/FirstVehicleScreen';
import { VehicleFormScreen } from '../screens/vehicles/VehicleFormScreen';
import { AppStackParamList } from './routes';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: 'Dashboard' }}
      />
      <Stack.Screen
        name="FirstVehicle"
        component={FirstVehicleScreen}
        options={{ title: 'Primeiro veiculo' }}
      />
      <Stack.Screen
        name="VehicleForm"
        component={VehicleFormScreen}
        options={{ title: 'Cadastrar veiculo' }}
      />
      <Stack.Screen
        name="MaintenancePlanLoading"
        component={MaintenancePlanLoadingScreen}
        options={{ title: 'Plano inicial' }}
      />
      <Stack.Screen
        name="MaintenancePlan"
        component={MaintenancePlanScreen}
        options={{ title: 'Manutencao' }}
      />
      <Stack.Screen
        name="FuelRecord"
        component={FuelRecordScreen}
        options={{ title: 'Abastecimento' }}
      />
    </Stack.Navigator>
  );
}
