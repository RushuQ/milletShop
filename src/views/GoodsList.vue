/**
* Created by Song on 2017/10/30.
*/
<template>
  <div class="hello">
    <body style="overflow: hidden;">
    <nav-header></nav-header>
    <nav-breader muneName="商品列表"></nav-breader>
    <div class="accessory-result-page">
      <div class="container">
        <div class="filter-nav">
          <span :class="{'showAction':queryShow}" class="query-wrap">
              <svg @click="queryShow=true" v-show="!queryShow" class="icon" style="width: 2em; height: 1.5em;cursor:pointer;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1508"><path d="M943.657331 1007.657331l63.894564-63.894563c8.434926-8.434926 8.434926-21.930807 0-30.365733l-314.622735-314.622735-94.260297 94.260296 314.622735 314.622735c8.434926 8.434926 21.930807 8.434926 30.365733 0z" fill="#3C92CA" p-id="1509"></path><path d="M344.566722 141.390445c-112.184514 0-203.492586 91.308072-203.492587 203.492586 0 10.543657 8.645799 19.189456 19.189456 19.189457s19.189456-8.645799 19.189457-19.189457c0-91.097199 74.016474-165.113674 165.113674-165.113674 10.543657 0 19.189456-8.645799 19.189456-19.189456 0-10.75453-8.645799-19.189456-19.189456-19.189456z" fill="" p-id="1510"></path><path d="M706.425041 585.278418c-7.38056-7.38056-19.611203-7.38056-26.991763 0l-33.52883 33.528831-44.494234-44.494234c54.616145-60.942339 87.934102-141.495881 87.934102-229.640857 0-189.996705-154.570016-344.566722-344.566721-344.566721S0 154.675453 0 344.672158s154.570016 344.566722 344.566722 344.566722c88.144975 0 168.487644-33.317957 229.640856-87.934102l44.494234 44.494234-33.52883 33.52883c-3.584843 3.584843-5.693575 8.434926-5.693575 13.495881s2.108731 9.911038 5.693575 13.495882l299.228995 299.228995c11.808896 11.808896 27.413509 18.345964 44.072488 18.345963s32.263591-6.537068 44.072487-18.345963l33.107084-33.107084c11.808896-11.808896 18.345964-27.413509 18.345964-44.072488s-6.537068-32.263591-18.345964-44.072488L706.425041 585.278418zM38.378913 344.672158c0-168.90939 137.489292-306.398682 306.398682-306.398682s306.398682 137.489292 306.398682 306.398682-137.489292 306.398682-306.398682 306.398682-306.398682-137.489292-306.398682-306.398682z m940.28336 600.988468l-33.107084 33.107084c-4.639209 4.639209-10.543657 7.169687-17.080724 7.169687s-12.441516-2.530478-17.080725-7.169687l-285.733114-285.733114 67.268534-67.268533 285.733113 285.733113c4.639209 4.639209 7.169687 10.543657 7.169687 17.080725s-2.741351 12.652389-7.169687 17.080725z" fill="" p-id="1511"></path></svg>
              <input type="text" @keyup.enter="queryClick();" v-model="queryKeys" class="form-control" placeholder="关键字搜索">
          </span>
          <span class="sortby">排序:</span>
          <a href="javascript:void(0)" class="default cur" @click="defaultGoods()">默认</a>
          <a href="javascript:void(0)" class="price" @click="sortGoods()" :class="{'sort-up': sortFlag}">价格
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short"></use>
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby" @click.stop="showFilterPop">筛选</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter" id="filter" :class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>价格区间:</dt>
              <dd><a href="javascript:void(0)" @click="setPriceFilter('all')"
                     :class="{'cur':priceChecked=='all'}">选择价格</a></dd>
              <dd v-for="(item,index) in priceFilter">
                <a href="javascript:void(0)" @click="setPriceFilter(index)"
                   :class="{'cur':priceChecked==index}">￥ {{item.startPrice}} - {{item.endPrice}} 元</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="item in goodsList">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/'+  item.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="view-more-normal"
                 v-infinite-scroll="loadMore"
                 infinite-scroll-disabled="busy"
                 infinite-scroll-distance="20">
              <img src="./../../static/loading-svg/loading-spinning-bubbles.svg" v-show="loading">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>
    <model :mdShow="mdShow" @close="closeModal">
      <p slot="message">
        请先登录,否则无法加入到购物车中!
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:void(0);" @click="mdShow=false">关闭</a>
      </div>
    </model>
    <model :mdShow="mdShowCart" @close="closeModal">
      <p slot="message">
        <svg class="icon-status-ok">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
        </svg>
        <span>加入购物车成!</span>
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:void(0);" @click="mdShowCart=false">继续购物</a>
        <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">查看购物车</router-link>
      </div>
    </model>
    <nav-footer></nav-footer>
    </body>
  </div>
</template>

<script>
  import './../assets/css/base.css'
  import './../assets/css/goods-list.css'
  import NavHeader from './../components/NavHeader.vue'
  import NavFooter from './../components/NavFooter.vue'
  import NavBreader from './../components/NavBreader.vue'
  import Model from './../components/Model.vue';
  import axios from 'axios';

  axios.defaults.withCredentials = true;

  export default {
    data() {
      return {
        goodsList: [],
        page: 1,
        pageSize: 8,
        busy: true,
        loading: false,
        sortFlag: true,
        priceFilter: [
          {
            startPrice: '0.00',
            endPrice: '100.00'
          },
          {
            startPrice: '100.00',
            endPrice: '500.00'
          },
          {
            startPrice: '500.00',
            endPrice: '1000.00'
          },
          {
            startPrice: '1000.00',
            endPrice: '2000.00'
          },
          {
            startPrice: '2000.00',
            endPrice: '3000.00'
          },
          {
            startPrice: '3000.00',
            endPrice: '6000.00'
          }
        ],
        queryKeys: '',
        priceChecked: 'all',
        filterBy: false,
        overLayFlag: false,
        mdShowCart: false,
        mdShow: false,
        queryAct: false,
        queryShow: false,
        defaultQuery: false
      }
    },
    mounted() {
      this.getGoodsList();
    },
    components: {
      NavHeader,
      NavFooter,
      NavBreader,
      Model
    },
    methods: {
      getGoodsList(flag) {
        this.queryAct = false;
        var param = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.sortFlag ? 1 : -1,
          priceLevel: this.priceChecked
        }
        this.loading = true;
        axios.get('/goods/list', {
          params: param
        }).then((result) => {
          this.loading = false;
          if (result.data.status == '0') {
            if (flag) {
              this.goodsList = this.goodsList.concat(result.data.result.list);
              this.busy = result.data.result.count ? false : true;
            } else {
              this.goodsList = result.data.result.list;
              this.busy = false;
            }
          } else {
            this.goodsList = [];
          }
        })
      },
      queryClick() {
        this.keyWord = this.queryKeys;
        this.page=1;
        this.getQueryList(this.queryKeys);
        this.queryKeys = '';
        this.goodsList = [];
        this.queryShow = false;
      },
      getQueryList(flag) {
        let param = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.sortFlag ? 1 : -1,
          keyWord: this.keyWord
        }
        axios.get('/goods/queryKey', {
          params: param
        }).then((result) => {
          this.loading = false;
          if (result.data.status == '0') {
            if (flag) {
              this.goodsList = this.goodsList.concat(result.data.result.list);
              this.busy = result.data.result.count ? false : true;
            } else {
              this.goodsList = result.data.result.list;
              this.busy = false;
            }
            this.queryAct = true;
          } else {
            this.goodsList = [];
          }
        })
      },
      sortGoods() {
        this.sortFlag = !this.sortFlag;
        this.page = 1;
        this.queryAct?this.getQueryList():this.getGoodsList();
      },
      defaultGoods() {
        this.sortFlag = true;
        this.page = 1;
        this.getGoodsList();
      },
      setPriceFilter(index) {
        this.priceChecked = index;
        this.page = 1;
        this.getGoodsList();
      },
      loadMore() {
        this.busy = true;
        setTimeout(() => {
          this.page++,
            this.queryAct?this.getQueryList(true):this.getGoodsList(true);
        }, 500)
      },
      showFilterPop() {
        this.filterBy = true;
        this.overLayFlag = true;
      },
      closePop() {
        this.overLayFlag = false;
        this.filterBy = false;
      },
      closeModal() {
        this.mdShow = false;
        this.mdShowCart = false;
      },
      addCart(id) {
        axios.post('/goods/addCart', {
          productId: id
        }).then((response) => {
          var res = response.data;
          if (res.status == '0') {
            this.mdShowCart = true;
            this.$store.commit('updateCartCount', 1);
          } else {
            this.mdShow = true;
          }
        })
      }
    }
  }
</script>

