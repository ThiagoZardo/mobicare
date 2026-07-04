import { FuelRecord } from '../fuel/fuel.types';
import { MaintenancePlanItem } from '../maintenance/maintenance.types';
import { Vehicle } from '../vehicles/vehicles.types';

export type DashboardSummary = {
  mainVehicle?: Vehicle;
  upcomingMaintenance: MaintenancePlanItem[];
  latestFuelRecord?: FuelRecord;
};
