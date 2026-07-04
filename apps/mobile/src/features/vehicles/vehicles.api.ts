import { Vehicle } from './vehicles.types';

export type CreateVehicleInput = Omit<Vehicle, 'id'>;
