import products from "./products"

const state = {
  items: [{
    id: 1,
    quantity: 1
  }], // 购物列表
  checkoutStatus: null // 状态
}
// 总价？
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(v => {
      let id = v.id
      let quantity = v.quantity
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0);
    // return state.items.reduce()
  }
}
const actions = {
  addProductToCart({ state, commit }, product) {
    // 读state
    commit('setCheckoutStatus', null);
    if(product.inventory > 0) {
      const cartItem = state.items.find(item => item.id == product.id);
      if(!cartItem) {
        commit('pushProductToCart', { id: product.id });
      } else {
        commit('incrementItemQuantuty', cartItem);
      }
    }
  }
}
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantuty(state, { id }) {
    const cartItem = state.items.find(item => item.id == id)
    cartItem.quantity++
  }
}

export default {
  namespaced: true,
  getters,
  actions,
  state,
  mutations
}