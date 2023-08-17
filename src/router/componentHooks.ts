//import Component from 'vue-class-component';
import { Vue } from 'vue-class-component';

// register router hooks
Vue.registerHooks(['beforeRouterEnter', 'beforeRouteLeave', 'beforeRouteUpdate']);
