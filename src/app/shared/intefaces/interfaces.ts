export interface ISchedule {
  day: string;
  start: string;
  duration: string;
  status: string;
  hours?: any[];
}

export interface IResponse {
  status: boolean;
  schedule: ISchedule[];
}
