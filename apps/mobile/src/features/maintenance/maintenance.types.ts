export type MaintenanceStatus = 'ok' | 'upcoming' | 'overdue';

export type MaintenancePlanItem = {
  id: string;
  name: string;
  status: MaintenanceStatus;
  source: string;
  confidence: 'low' | 'medium' | 'high';
  dueMileage?: number;
  dueDate?: string;
};
