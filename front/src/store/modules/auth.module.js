import authService from "@/services/auth.service.js";
import Cookies from "js-cookie";

const authModule = {
  namespaced: true,
  state: () => ({
    user_id: null,
    token: null,
    error: null,
  }),
  mutations: {
    SET_USER_ID(state, payload) {
      state.user_id = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    login: async ({ commit }, payload) => {
      try {
        const res = await authService.login(payload);
        Cookies.set("auth-token", res.data.token, {
          expires: res.data.expires,
        });

        commit("SET_USER_ID", res.data.user_id);
        commit("SET_ERROR", null);
      } catch (error) {
        console.log(error.response.data.message);
        commit("SET_ERROR", error.response.data.message);
      }
    },
  },
};

export default authModule;
