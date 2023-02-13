import type User from "@/entities/account/User";
import API from "./Api";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default new (class ApiUser extends API {
  async fetchCurrentUser(): User {
    await timeout(200);
    return {
      firstname: "Игорь",
      lastname: "Николаев",
      middlename: "Леонидович",
      sex: "male",
      birthday: new Date(1998, 1, 3),
      email: "L1vet7@gmail.com",
      phone: "9998285045",
      bonuses: 2278,
      level: 6,
    };
  }
})();
