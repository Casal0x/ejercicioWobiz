import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { upperFirst, camelCase } from "lodash";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import "./registerServiceWorker";
import "./styles/global.scss";

Vue.config.productionTip = false;

//Auto Register Globally Base Compontents
const requireComponent = require.context(
  "./components/BaseComponents",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});
Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
