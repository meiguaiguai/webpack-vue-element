
//入口文件
import Vue from 'vue';
import App from './app.vue'
// import App from './components/a.vue';
// import Lian from './components/star.vue';
import VueRouter from 'vue-router';
// 试用路由插件
Vue.use(VueRouter);
//引入路由配置文件
import routes from './config/routes.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);



// 使用配置文件规则
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routes })


// new Vue({
//     el:"#root",
//     data:{
//
//     },
//     components:{
//         app:App,
//         lian:Lian
//     }
// })
const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#root')