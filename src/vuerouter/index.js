let _Vue = null
    /* vueRouter模拟实现 */
export default class VueRouter {
    static install(Vue) {
        //1、判断是否安装
        if (VueRouter.install.installed) {
            return
        }
        VueRouter.install.installed = true
            //2、Vue构造函数记录到全局变量
        _Vue = Vue
            //3、创建的vue实例时传入的router对象注入到所有vue实例上
            //构造函数原型
            //混入
        _Vue.mixin({
            beforeCreate() {
                //this为vue实例
                if (this.$options.router) {
                    _Vue.prototype.$router = this.$options.router
                    this.$options.router.init()
                }
            }
        })
    }

    constructor(options) {
        this.options = options
        this.routeMap = {}
            //响应式data
        this.data = _Vue.observable({
            //存储当前路由地址
            current: '/'
        })
    }
    init() {
        this.createRouteMap()
        this.initComponent(_Vue)
        this.initEvent()
    }
    createRouteMap() {
        //遍历所有路由规则 转换route 规则为键值对 存储到routeMap中 键：地址 值：组件
        this.options.routes.forEach(route => {
            this.routeMap[route.path] = route.component
        })
    }
    initComponent(Vue) {
        //router-link router-view
        Vue.component('router-link', {
            props: {
                to: String
            },
            // template: '<a :href="to"><slot></slot></a>'
            render(h) {
                return h('a', {
                    attrs: {
                        href: this.to
                    },
                    on: {
                        click: this.clickHandler
                    }
                }, [this.$slots.default])
            },
            methods: {
                clickHandler(e) {
                    history.pushState({}, '', this.to)
                        //加载路径对应组件
                    this.$router.data.current = this.to
                    e.preventDefault()
                }
            }
        })
        const self = this
        Vue.component('router-view', {
            render(h) {
                const c = self.routeMap[self.data.current]

                return h(c)
            }

        })
    }
    initEvent() {
        window.addEventListener('popstate', () => {
            this.data.current = window.location.pathname
        })
    }
}