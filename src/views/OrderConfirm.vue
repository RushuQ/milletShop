<template>
  <div>
    <nav-header></nav-header>
    <nav-breader muneName="订单确认">
      <span>结算页</span>
    </nav-breader>
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-add" viewBox="0 0 32 32">
          <title>add2</title>
          <path class="path1" d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
        </symbol>
        <symbol id="icon-ok" viewBox="0 0 39 32">
          <title>ok</title>
          <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path class="path1" d="M25.599 11.292l-4.892-4.892 3.825-3.825 4.892 4.892-3.825 3.825zM4.732 23.308l3.959 3.959-5.939 1.98 1.98-5.939zM10.666 26.225l-4.892-4.892 13.425-13.425 4.892 4.892-13.425 13.425zM31.687 6.713l-6.4-6.4c-0.417-0.417-1.091-0.417-1.508 0l-20.267 20.267c-0.114 0.115-0.191 0.25-0.242 0.393-0.003 0.009-0.012 0.015-0.015 0.025l-3.2 9.6c-0.128 0.383-0.029 0.806 0.257 1.091 0.203 0.204 0.476 0.313 0.754 0.313 0.112 0 0.227-0.017 0.337-0.054l9.6-3.2c0.011-0.003 0.017-0.013 0.027-0.016 0.142-0.052 0.276-0.128 0.39-0.242l20.267-20.267c0.417-0.416 0.417-1.091 0-1.508v0z"></path>
        </symbol>
        <symbol id="icon-delete" viewBox="0 0 26 32">
          <title>delete</title>
          <path class="path1" d="M17.723 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM7.877 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM12.8 28c0.543 0 0.985-0.448 0.985-1v-12c0-0.552-0.441-1-0.985-1s-0.984 0.448-0.984 1v12c0 0.552 0.441 1 0.984 1v0zM23.631 4h-5.908v-2c0-1.104-0.882-2-1.969-2h-5.908c-1.087 0-1.969 0.896-1.969 2v2h-5.908c-1.087 0-1.969 0.896-1.969 2v2c0 1.104 0.882 2 1.969 2v18c0 2.208 1.765 4 3.939 4h13.784c2.174 0 3.938-1.792 3.938-4v-18c1.087 0 1.969-0.896 1.969-2v-2c0-1.104-0.882-2-1.969-2v0zM9.846 3c0-0.552 0.441-1 0.984-1h3.938c0.544 0 0.985 0.448 0.985 1v1h-5.908v-1zM21.662 28c0 1.104-0.882 2-1.969 2h-13.784c-1.087 0-1.97-0.896-1.97-2v-18h17.723v18zM22.646 8h-19.692c-0.543 0-0.985-0.448-0.985-1s0.441-1 0.985-1h19.692c0.543 0 0.984 0.448 0.984 1s-0.441 1-0.984 1v0z"></path>
        </symbol>
        <symbol id="icon-clock" viewBox="0 0 32 32">
          <title>clock</title>
          <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
        </symbol>
      </defs>
    </svg>
    <div class="container">
      <div class="checkout-order">
        <div class="check-step">
          <ul>
            <li class="cur"><span>确认</span> 收货地址</li>
            <li class="cur"><span>核对</span> 订单信息</li>
            <li><span>支付</span> 方式</li>
            <li><span>成功提交</span> 订单</li>
          </ul>
        </div>
        <div class="page-title-normal checkout-title">
          <h2><span>填写并核对订单信息</span></h2>
        </div>
        <div class="item-list-wrap confirm-item-list-wrap">
          <div class="cart-item order-item">
            <div class="cart-item-head">
              <ul>
                <li>商品</li>
                <li>单价</li>
                <li>数量</li>
                <li>小计</li>
              </ul>
            </div>
            <ul class="cart-item-list">
              <li v-for="item in cartList">
                <div class="cart-tab-1">
                  <div class="cart-item-pic">
                    <img v-lazy="'/static/'+item.productImage" :alt="item.productName">
                  </div>
                  <div class="cart-item-title">
                    <div class="item-name">{{item.productName}}</div>
                  </div>
                </div>
                <div class="cart-tab-2">
                  <div class="item-price">{{item.salePrice}}</div>
                </div>
                <div class="cart-tab-3">
                  <div class="item-quantity">
                    <div class="select-self">
                      <div class="select-self-area">
                        <span class="select-ipt">×{{item.productNum}}</span>
                      </div>
                    </div>
                    <div class="item-stock item-stock-no">有货</div>
                  </div>
                </div>
                <div class="cart-tab-4">
                  <div class="item-price-total">{{(item.salePrice*item.productNum)}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="price-count-wrap">
          <div class="price-count">
            <ul>
              <li>
                <span>商品总额:</span><span>{{subTotal}}</span>
              </li>
              <li>
                <span>运费:</span>
                <span>+{{cartList.length?shipping:0}}</span>
              </li>
              <li>
                <span>优惠:</span>
                <span>-{{cartList.length?discount:0}}</span>
              </li>
              <li>
                <span>纳税:</span>
                <span>+{{cartList.length?tax:0}}</span>
              </li>
              <li class="order-total-price">
                <span>应付总额:</span>
                <span>{{orderTotal}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="order-foot-wrap">
          <div class="prev-btn-wrap"><router-link class="btn btn--m" to="/Cart">修改订单</router-link></div>
          <div class="next-btn-wrap">
            <button class="btn btn--m btn--red" @click="payMent">提交订单</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
  import NavHeader from './../components/NavHeader.vue'
  import NavFooter from './../components/NavFooter.vue'
  import NavBreader from './../components/NavBreader.vue'
  import Model from './../components/Model.vue';
  import axios from 'axios'

  export default {
    components: {
      NavHeader,
      NavBreader,
      NavFooter,
      Model
    },
    data() {
      return {
        shipping:100,
        discount:200,
        tax:400,
        cartList: [],
        subTotal: 0
      }
    },
    computed: {
      orderTotal() {
        return this.cartList.length?this.subTotal+this.shipping-this.discount+this.tax:0;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        axios.get("/users/cartList").then((response)=>{
          let res = response.data;
          this.cartList = res.result;
          this.cartList.forEach((item)=>{
            if(item.checked=='1'){
              this.subTotal += parseFloat(item.salePrice)*parseInt(item.productNum);
            }
          });
        })
      },
      payMent() {
        var addressId = this.$route.query.addressId;
        axios.post('/users/payMent',{
          addressId : addressId,
          orderTotal:this.orderTotal
        }).then(response => {
          let res = response.data;
          if(res.status=="0"){
            this.$router.push({
              path:'/orderSuccess?orderId='+ res.result.orderId + '&&orderTotal=' + res.result.orderTotal
            })
          }
        })
      }
    }
  }
</script>
