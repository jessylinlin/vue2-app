class Observer {
    constructor(data) {
        this.walk(data)
    }
    walk(data) {
        // 遍历data对象的属性
        //1 对象
        if (!data || typeof data !== 'object') {
            return
        }

        //2 遍历data的所有属性 调用defineReactive
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }

    defineReactive(obj, key, value) {
        //value为对象，继续讲对象的属性转换为响应式
        const self = this

        //收集依赖 发送通知
        let dep = new Dep();

        this.walk(value)
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                //收集依赖
                Dep.target && dep.addSub(Dep.target)

                return value
            },
            set(newValue) {
                if (newValue === value) {
                    return
                }
                value = newValue
                self.walk(newValue)

                //发送通知
                dep.notify()
            }
        })
    }
}