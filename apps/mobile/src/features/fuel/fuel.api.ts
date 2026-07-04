import { FuelRecord } from './fuel.types';

export type CreateFuelRecordInput = Omit<FuelRecord, 'id'>;
