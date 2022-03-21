import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

let instance;

function render() {
  // 加载vue实例
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}

// 独立运行微应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 被主应用使用时
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}
