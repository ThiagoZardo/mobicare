import { MaintenancePlanItem } from './maintenance.types';

export type InitialMaintenancePlan = {
  vehicleId: string;
  items: MaintenancePlanItem[];
};
