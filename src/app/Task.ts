export interface Task {
  id?: number; //cuando creamos una task tiene un id pero podría no venir
  text: string;
  day: string;
  reminder: boolean;
}
