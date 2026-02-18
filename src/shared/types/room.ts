export interface Room {
  _id: string;
  name: string;
  microcontrollerId: string;
  minTemperature: number;
  maxTemperature: number;
  minHumidity: number;
  maxHumidity: number;
}

export type ReadingTime = {
  year: number;
  month: number;
  day: number;
  hour: number;
}

export type Reading = {
  _id: ReadingTime;
  averageTemperature: number;
  averageHumidity: number;
  maxTemperature: number;
  minTemperature: number;
  maxHumidity: number;
  minHumidity: number;
}

export type RoomReadingsResponse = {
  room: Room;
  startDate: string;
  endDate: string;
  readings: Reading[];
}