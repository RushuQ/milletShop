// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import VueLazyload from 'vue-lazyload';
import Vuex from 'Vuex';
import infiniteScroll from 'vue-infinite-scroll';
import axios from 'axios';
axios.defaults.withCredentials = true;

Vue.use(infiniteScroll);
Vue.use(Vuex);
Vue.use(VueLazyload, {
  loading: 'static/loading-svg/loading-bars.svg',
  attempt: 3
})

Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    nickName:'',
    cartCount: 0
  },
  mutations: {
    updateUserInfo(state,nickName){
      state.nickName = nickName;
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount;
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted(){
    this.checkLogin();
    this.getCartCount();
  },
  methods: {
    checkLogin(){
      axios.get('/users/checkLogin').then((response) => {
        var res = response.data;
        if(res.status == '0'){
          this.$store.commit('updateUserInfo',res.result);//触发状态变更
        } else {
          if(this.$router.path!='/goods'){
            this.$router.path!='/goods';
          }
        }
      })
    },
    getCartCount() {
      axios.get('/users/getCartcount').then((res) => {
          var res = res.data;
          if(res.status == '0'){
            this.$store.commit('updateCartCount',res.result);
          }
       })
    }
  },
  template: '<App/>',
  components: { App }
})
