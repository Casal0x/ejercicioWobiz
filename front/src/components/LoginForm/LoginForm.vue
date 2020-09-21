<template>
  <validation-observer v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(submit)" class="text-left login-form">
      <h2 class="login-form__title font-bolder mt-5 mb-4">
        Ingresa a tu cuenta
      </h2>
      <base-error :error="serviceError" />
      <validation-provider
        name="email"
        rules="required|email"
        v-slot="{ errors }"
      >
        <base-input
          v-model="formInfo.email"
          name="email"
          label="Email"
          type="text"
          placeholder="ej: usuario@mail.com"
          class="login-form__transform-lowercase"
        />
        <base-error v-if="errors" :error="errors[0]" />
      </validation-provider>
      <validation-provider
        name="contraseña"
        rules="required|min:6"
        v-slot="{ errors }"
      >
        <base-input
          v-model="formInfo.password"
          name="clave"
          label="Contraseña"
          error="asdads"
          type="password"
          placeholder="Escribe tu contraseña"
        />
        <base-error v-if="errors" :error="errors[0]" />
      </validation-provider>
      <div class="login-form__remember-password">
        <a href="#">¿Olvidaste tu contraseña?</a>
      </div>
      <base-button
        type="submit"
        size="lg"
        block
        class="login-form__button font-bold"
      >
        Ingresar a mi cuenta
      </base-button>
    </form>
  </validation-observer>
</template>

<script>
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("email", {
  validate(value) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    );
  },
  message: "El email ingresado no es correcto.",
});

extend("required", {
  ...required,
  message: "Necesitamos tu {_field_}.",
});

extend("min", {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ["length"],
  message: "La contraseña no tiene un formato válido.",
});

export default {
  name: "LoginForm",
  props: ["onSubmit", "serviceError"],
  data() {
    return {
      formInfo: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    submit() {
      this.onSubmit(this.formInfo);
    },
  },
};
</script>

<style lang="scss">
.login-form {
  &__title {
    font-size: var(--font-lg) !important;
    color: var(--color-darkgreen);
  }

  &__transform-lowercase {
    input {
      text-transform: lowercase;
    }
  }

  &__remember-password {
    margin-bottom: 22px;

    a {
      color: var(--color-gray);
      font-size: var(--font-sm);
      text-decoration: underline;
      &:hover {
        color: var(--color-darkgray);
      }
    }
  }

  &__button {
    background-color: var(--color-lightblue) !important;
    border-color: var(--color-lightblue) !important;
    font-size: var(--font-xs);
    height: 45px;

    &:hover {
      background-color: var(--color-darkblue) !important;
      border-color: var(--color-darkblue) !important;
    }
  }
}
</style>
