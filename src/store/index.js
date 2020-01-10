import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: 0,
    userNick: '',
    defaultHeadImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2363028509,190015165&fm=26&gp=0.jpg",
    userHeadImg:'this.defaultHeadImg',
	headerTitle:"猫眼电影",
	cityTitle: '句容',
	cityId: 20,
    // 模拟数据库用户信息
    testInfo: [
      {
        account: 'bjpengyuyan',
        password: '111111',
        userNick: '滨江彭于晏',
        userHeadImg:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3279316276,2228302562&fm=26&gp=0.jpg',
        likeList: ['健身', '台球']
      }
    ]
  },
  getters: {
    testUserInfo: state => account => {
      let userinfoIndex = state.testInfo.findIndex(info => info.account === account)
      return userinfoIndex === -1 ? undefined : state.testInfo[userinfoIndex]
    }
  },
  mutations: {
	  changeHt(state, payload) {
	      // state状态  payload // 荷载 (存放参数)
	      state.headerTitle = payload;
	  },
	  changeCity(state, payload) {
	      state.cityTitle = payload.nm;
	      state.cityId = payload.id;
	  },
    loginOut(state) {
      state.isLogin = 0
      state.userNick = ''
      state.userHeadImg = state.defaultHeadImg
    },
    loginIn(state, payload) {
      state.isLogin = 1
      state.userNick = payload.userNick
      state.userHeadImg = payload.userHeadImg || state.defaultHeadImg
    },
    register: (state, payload) => state.testInfo.push(payload)
  },
  actions: {
  
  }
})

