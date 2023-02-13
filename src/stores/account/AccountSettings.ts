export interface Levels {
  [level: string]: Level;
}

export interface Level {
  icon: string;
  iconColor: string;
  iconBackgroundColor: string;
  discount: number;
  points: number;
}

export default interface AccountSettings {
  levels: Levels;
}
