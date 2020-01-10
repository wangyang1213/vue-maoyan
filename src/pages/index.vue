<template>
  <div>
    <div class="top">
      <page-title >猫眼电影</page-title>
      <ul v-if="showMainType==='film'" class="topNav">
		<li :class="[showHot==2?'active':'']" @click="toCity">
		  <span>{{cityTitle}}</span>
		  <i></i>
		</li>
        <li :class="[showHot==1?'active':'']" @click="showHot=1">正在热映</li>
        <li :class="[showHot==0?'active':'']" @click="showHot=0">即将上映</li>
		<li :class="[showHot==3?'active':'']" @click="toSearch">搜索</li>
		
       
      </ul>
    </div>
    <div class="main">
      <div v-if="showMainType==='film'">
        <city v-show="showHot==2"></city>
        <hoting v-show="showHot==1"></hoting>
        <comming v-show="showHot==0"></comming>
       <search v-show="showHot==3"></search>
      </div>
      <div v-else-if="showMainType==='mine'">
        <mine></mine>
      </div>
      <div v-else>
        <cinima></cinima>
      </div>
    </div>
    <div class="footer-nav">
      <page-footer @chooseMenu="chooseMenu"></page-footer>
    </div>
  </div>
</template>

<script>
import hoting from '../components/hoting.vue'
import comming from '../components/comming.vue'
import cinima from '@/pages/cinima'
import mine from '@/pages/mine'
import city from '../components/city.vue'
import search from '../components/search.vue'

export default {
  components: {
    hoting, comming, cinima, mine,city,search
  },
  data() {
    return {
      showHot: 1,
      showMainType: 'film'
    }
  },
  methods: {
    chooseMenu(val) {
      this.showMainType = val
    },
	toCity() {
	  this.$router.push({
	      path: '/city',
	      name: 'city'
	  })
	},
	toSearch() {
	  this.$router.push({
	    path: '/search',
	    name: 'search'
	  })
	}
  },
  computed: {
    
      cityTitle() {
          return this.$store.state.cityTitle;
      },
	  search() {
	      return this.$store.state.search;
	  }
	  
  },
}
</script>

<style scoped>
.top{
  width: 100%;
  position: fixed;
  z-index: 9;
}
.topNav{
  height: 44px;
  line-height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.topNav li{
  height: 100%;
  cursor: pointer;
}
.active{
  color: rgb(229, 72, 71);
  border-bottom: 2px solid rgb(229, 72, 71);
}
.main{
  padding-top: 100px;
  padding-bottom: 51px;
}
.footer-nav {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  padding: 8px 40px;
  background-color: #fff;
  border-top: 1px solid #dbdbdb;
}
.iconfont {
    color: #E54847;
    padding-right: 20px;
    display: block;
  }
</style>
