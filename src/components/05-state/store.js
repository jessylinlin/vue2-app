export default {
    debug: true,
    state: {
        user: {
            name: '包黑子',
            age: 2,
            sex: '小仙女'
        }
    },
    setUserNameAction(name) {
        if (this.debug) {
            console.log('setUserNameAction:', name)
        }
        this.state.user.name = name
    }
}