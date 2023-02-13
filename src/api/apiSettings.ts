import API from "./Api";

export default new (class ApiSettings extends API {
  async fetchSettings() {
    return {
      account: {
        levels: {
          level1: {
            icon: "icon-easter",
            iconColor: "#3B68DF",
            iconBackgroundColor: "#3B68DF12",
            discount: 5,
            points: 0,
          },
          level2: {
            icon: "icon-halloween",
            iconColor: "#C500E5",
            iconBackgroundColor: "#C500E512",
            discount: 7,
            points: 200,
          },
          level3: {
            icon: "icon-lama",
            iconColor: "#F8C513",
            iconBackgroundColor: "#F8C51312",
            discount: 10,
            points: 500,
          },
          level4: {
            icon: "icon-robot",
            iconColor: "#523BDF",
            iconBackgroundColor: "#523BDF12",
            discount: 15,
            points: 1000,
          },
          level5: {
            icon: "icon-pokemon",
            iconColor: "#DF3BBB",
            iconBackgroundColor: "#DF3BBB12",
            discount: 20,
            points: 3000,
          },
          level6: {
            icon: "icon-pika",
            iconColor: "#DF4F3B",
            iconBackgroundColor: "#DF4F3B12",
            discount: 25,
            points: 5000,
          },
        },
      },
    };
  }
})();
