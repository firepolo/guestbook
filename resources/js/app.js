import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';

import IndexView from './views/Index.vue';
import PostIndexView from './views/post/Index.vue';
import PostShowView from './views/post/Show.vue';
import AdminLogin from './views/admin/Login.vue';
import AdminIndex from './views/admin/Index.vue';
import AdminPostIndex from './views/admin/post/Index.vue';
import AdminPostCreate from './views/admin/post/Create.vue';
import AdminPostEdit from './views/admin/post/Edit.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

const store = new Vuex.Store({
	state: {
		logged: false
	}
});

const router = new VueRouter({
	routes: [
		{
			name: 'home',
			path: '/',
			component: IndexView
		},
		{
			name: 'post.index',
			path: '/post',
			component: PostIndexView
		},
		{
			name: 'post.show',
			path: '/post/:id',
			component: PostShowView
		},
		{
			name: 'admin',
			path: '/admin',
			beforeEnter(to, from, next) {
				console.log(store.state.logged, to.name);
				if (!store.state.logged && 'admin.login' !== to.name) next({ name: 'admin.login' });
				else next();
			},
			component: AdminIndex,
			children: [
				{
					name: 'admin.login',
					path: 'login',
					component: AdminLogin
				},
				{
					name: 'admin.post.index',
					path: 'post',
					component: AdminPostIndex
				},
				{
					name: 'admin.post.create',
					path: 'post/create',
					component: AdminPostCreate
				},
				{
					name: 'admin.post.edit',
					path: 'post/:id',
					component: AdminPostEdit
				}
			]
		}
	]
});

const app = new Vue({
	el: '#app',
	store,
	router
});