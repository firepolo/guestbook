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
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
window.axios = axios;

const store = new Vuex.Store({
	state: {
		logged: false
	},
	mutations: {
		SET_LOGGED(state, logged) {
			state.logged = logged;
		}
	},
	actions: {
		async login(context, email, password) {
			try {
				const response = await axios.post('/api/admin/login', {
					email,
					password
            	});
				context.commit('SET_LOGGED', true);
			}
			catch (ex) {
			}
		},
		async logout(context) {
			try {
				const response = await axios.post('/api/admin/logout');
				context.commit('SET_LOGGED', false);
			}
			catch (ex) {
			}
		}
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