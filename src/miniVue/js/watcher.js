class Watcher {
    constructor(vm, key, callback) {
        this.vm = vm
        this.key = key

        //回调 负责更新视图
        this.callback = callback

        /////////////////

        //watcher对象记录到dep静态属性target
        Dep.target = this

        //触发get对象， 调用addsub()
        this.oldValue = vm[key]

        Dep.target = null
    }

    //数据变化更新视图
    update() {
        let newValue = this.vm[this.key] //已经更新

        if (this.oldValue === newValue) {
            return
        }

        this.callback(newValue)
    }
}