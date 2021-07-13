class Compiler {
    constructor(vm) {
        this.el = vm.$el
        this.vm = vm
        this.compile(this.el)
    }

    //编译模板 处理文本和元素节点
    compile(el) {
        let childNodes = el.childNodes

        Array.from(childNodes).forEach(node => {
            if (this.isTextNode(node)) {
                this.compileText(node)
            }
            if (this.isElementNode(node)) {
                this.compileElement(node)
            }

            //判断node是否有子节点 ，递归compile
            if (node.childNodes && node.childNodes.length) {
                this.compile(node)
            }
        })
    }

    //元素 /指令
    compileElement(node) {
        //遍历dom 属性节点
        // console.log(node.attributes)
        Array.from(node.attributes).forEach(attr => {
            let attrName = attr.name
                //判断是否是指令
            if (this.isDirective(attrName)) {
                //v-text --> text
                attrName = attrName.substr(2)
                let key = attr.value
                this.updater(node, key, attrName)
            }
        })
    }

    //赋值方法
    updater(node, key, attrName) {
        let updateFn = this[attrName + 'Updater']
        updateFn && updateFn.call(this, node, this.vm[key], key)
    }

    //处理v-text指令
    textUpdater(node, value, key) {
        node.textContent = value

        new Watcher(this.vm, key, (newValue) => {
            node.textContent = newValue
        })
    }

    //处理v-model指令
    modelUpdater(node, value, key) {
        node.value = value
        new Watcher(this.vm, key, (newValue) => {
            node.value = newValue
        })

        //双向绑定 表单元素 注册事件
        node.addEventListener('input', () => {
            this.vm[key] = node.value
        })
    }

    //文本 插值表达式
    compileText(node) {
        //nodeValue
        //textContent
        // console.dir(node)
        //{{   msg}}
        let reg = /\{\{(.+?)\}\}/ //匹配差值表达式 ,()提取内容
        let value = node.textContent
        if (reg.test(value)) {
            let key = RegExp.$1.trim()
            node.textContent = value.replace(reg, this.vm[key])

            //创建watcher对象 数据改变 更新视图
            new Watcher(this.vm, key, (newValue) => {
                node.textContent = newValue
            })
        }
    }

    //判断元素是否指令 v-
    isDirective(attrName) {
        return attrName.startsWith("v-")
    }

    //是否文本节点 插值表达式
    isTextNode(node) {
        //node.nodeType
        return node.nodeType === 3
    }

    //指令 
    isElementNode(node) {
        return node.nodeType === 1
    }
}