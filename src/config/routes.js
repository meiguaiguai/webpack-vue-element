//用来存放路由配置的文件夹
import Index from '../page/index.vue';
import List from '../page/list.vue';
import Star from '../page/star.vue'
// Vue.use(Router);
//路由规则设置
export default[
    {
        path: '/',
        component: Index
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/star',
        component: Star
    }
]
