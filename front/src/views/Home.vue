<template>
  <div class="auth row">
    <div class="col-12 col-md-6 col-lg-4 p-0 ml-0 col">
      <div class="box vh-100 white-bg box-shadow">
        <div class="row h-100">
          <div class="auth__form-wrapper col h-100">
            <a href="https://www.wobiz.com/">
              <img
                src="@/assets/wovizLogo.png"
                alt="Wobiz"
                class="auth__logo"
              />
            </a>
            <div class="form-wrapper">
              <login-form :onSubmit="onSubmit" :serviceError="error" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-8 col-md-6 d-none d-md-block p-0 col">
      <div class="position relative vh-100">
        <img :src="loginBg" class="vh-100 position-relative bg-vw" />
        <base-absolute-message>
          <p class="greenish-blue-text mr-3 mt-2">
            ¿No tienes una cuenta en Wobiz?
          </p>
          <a href="#">
            <base-button
              outline
              size="lg"
              class="auth__new-account-btn font-bold"
            >
              Crea tu cuenta
            </base-button>
          </a>
        </base-absolute-message>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LoginForm from "@/components/LoginForm/LoginForm.vue";
import base64Img from "@/assets/base64Img.js";

export default {
  name: "AuthPage",
  components: { LoginForm },
  data() {
    return {
      input: "",
      loginBg: base64Img.loginBg,
    };
  },
  computed: {
    ...mapState({
      user_id: (state) => state.authModule.user_id,
      error: (state) => state.authModule.error,
    }),
  },
  methods: {
    onSubmit(userData) {
      this.login(userData);
    },
    ...mapActions("authModule", ["login"]),
  },
};
</script>

<style lang="scss" scoped>
.auth {
  margin-right: 0 !important;
  .box {
    position: relative;
    padding: 30px 50px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 6px;
  }

  .bg-vw {
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: right;
    object-position: right;
  }

  &__logo {
    width: 130px;
  }

  &__new-account-btn {
    color: var(--color-darkgreen);
    border-color: var(--color-darkgreen);
    font-size: var(--font-xs);

    &:hover {
      background-color: var(--color-darkgreen);
      color: #fff;
    }
  }
}
</style>
