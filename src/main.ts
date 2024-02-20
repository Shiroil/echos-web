import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import vuetify from "./plugins/vuetify";

// const vuetify = createVuetify({
//     components,
//     directives
// })

createApp(App).use(store).use(router).use(vuetify).mount("#app");
