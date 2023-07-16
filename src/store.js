import { defineStore } from "pinia";
import axios from "axios";

export const useMyStore = defineStore({
  id: "myStore",
  state: () => ({
    order_history: [],
    auth_token: undefined,
    config: {
      headers: {
        "Content-Type": "application/json", // Example header
        "x-auth-token": undefined,
      },
    },
  }),
  getters: {},
  actions: {
    // loggin user function
    async userLoggedIn() {
      const { data } = await axios.post("/uc/login", {
        username: "chanin.t@smartblocktech.ai",
        password: "Zxcv1234",
      });
      if (data) {
        // Update the x-auth-token header before making the API request
        this.config.headers["x-auth-token"] = data.token;
      }
    },

    // new order request
    async sendBuySellCost(data) {
      if (!this.auth_token) {
        // If not logged in, call the userLoggedIn action first
        await this.userLoggedIn();
      }
      const response = await axios.post(
        "/exchange/order/add",
        { ...data },
        this.config
      );
      console.log(response);
      return true;
    },

    // order history request
    async getOrderHistory(type) {
      if (!this.auth_token) await this.userLoggedIn();
      const { data } = await axios.post(
        "/exchange/order/personal/history",
        {
          pageNo: 1,
          pageSize: 50,
          symbol: "BTC/THB",
          direction: "BUY",
          status: "TRADING",
          type: type,
        },
        this.config
      );
      this.order_history = data.content;
    },
  },
});
