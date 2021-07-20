const product = {
    namespaced: true,
    state: () => ({
        list: [
            { id: 1, title: 'iphone11', price: '5000' },
            { id: 2, title: 'iphone12', price: '6000' }
        ]
    }),
    getters: {

    },
    mutations: {
        setProducts(state, playload) {
            state.list = playload
        }

    },
    actions: {

    }
}
export default product