import Vue from 'vue'
import { AccordionMenu } from 'vue-accordion-menu'
import {Tabs, Tab} from 'vue-tabs-component'

import App from './App'
import SidePanel from './components/SidePanel'
import router from './router'

Vue.config.productionTip = false
Vue.component('AccordionMenu', AccordionMenu)
Vue.component('SidePanel', SidePanel)
Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
