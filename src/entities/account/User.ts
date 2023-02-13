export default interface User {
  firstname: string;
  lastname: string;
  middlename: string;
  sex: "male" | "female";
  birthday: date;
  email: string;
  phone: string;
  level: number;
  bonuses: number;
}
