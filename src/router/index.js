import Vue from 'vue'
import Router from 'vue-router'
// 引入
import index from '@/pages/index'
import movieDetail from '../pages/movieDetail.vue'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '',
			name: 'index',
			component: index,
			meta:{
				keepAlive:true 
			}
		},
		{
			path: '/movieDetail',
			name: 'movieDetail',
			component:()=> import('../pages/movieDetail')
		},
		{
		    path: '/city', 
		    name: 'city',
		    component: ()=> import('../components/city')
		},
		{
			path:'/login',
			name: 'login',
			component: () => import('../pages/login')
		},
		{
			path:'/register',
			name: 'register',
			component: () => import('../pages/register')
		},
		{
		  path: '/search', 
		  name: 'search',
		  component: ()=> import('@/components/search.vue')
		},
		{
		    path: '/movie_detail/:movieId', 
		    name: 'movie_detail',
		    component: () => import('@/pages/movieDetail')
		},
		{
		    path: '/cinemadetail/:cinemaId', 
		    name: 'cinemadetail',
		    component: ()=> import('@/components/cinemaDetail.vue')
		},
		{
		  path: '/movies/:movieId', 
		  name: 'movies',
		  component: ()=> import('@/components/movies.vue')
		}
	]
})
