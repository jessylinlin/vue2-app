class Vue {
    constructor(options) {
        //通过属性保存选项数据
        this.$options = options || {}
        this.$data = options.data || {}
        this.$el = typeof options.el === 'string' ?
            document.querySelector(options.el) : options.el

        //data 成员转换为getter、setter注入到实例 
        this._proxyData(this.$data)

        //调用observer 监听数据变化
        new Observer(this.$data)

        //调用compiler解析指令和差值表达式
        new Compiler(this)
    }
    _proxyData(data) {
        //遍历
        Object.keys(data).forEach(key => {
            // data中属性注入到vue实例
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get() {
                    return data[key]
                },
                set(newValue) {
                    if (data[key] === newValue) {
                        return
                    }

                    data[key] = newValue
                }
            })
        })


    }
}