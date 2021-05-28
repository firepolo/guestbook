import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';

import Navbar from './components/Navbar.vue';
import AdminNavbar from './components/AdminNavbar.vue';

import Parent from './views/Parent.vue';
import Index from './views/Index.vue';
import PostIndex from './views/post/Index.vue';
import PostShow from './views/post/Show.vue';
import AdminLogin from './views/admin/Login.vue';
import AdminIndex from './views/admin/Index.vue';
import AdminPostIndex from './views/admin/post/Index.vue';
import AdminPostCreate from './views/admin/post/Create.vue';
import AdminPostEdit from './views/admin/post/Edit.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').content;
axios.defaults.withCredentials = true;
window.axios = axios;

const store = new Vuex.Store({
	state: {
		logged: false,
		posts: []
	},
	getters: {
		posts(state) {
			return state.posts;
		}
	},
	mutations: {
		SET_LOGGED(state, logged) {
			state.logged = logged;
		}
	},
	actions: {
		async fetchPosts(context) {
			try {
				const response = await axios.get('/api/post');
				console.log(response);
			}
			catch (ex) {
			}
		},
		login(context, credential) {
			return new Promise((resolve, reject) => {
				axios.post('/api/admin/login', credential).then(response => {
					context.commit('SET_LOGGED', true);
					resolve();
				}).catch(error => {
					reject();
				});
			});
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
			path: '/',
			components: {
				default: Parent,
				navbar: Navbar,
			},
			children: [
				{
					name: 'home',
					path: '',
					component: Index
				},
				{
					name: 'post.index',
					path: 'post',
					component: PostIndex
				},
				{
					name: 'post.show',
					path: 'post/:id',
					component: PostShow
				}
			]
		},
		{
			path: '/admin',
			components: {
				default: Parent,
				navbar: AdminNavbar,
			},
			children: [
				{
					name: 'admin',
					path: '',
					component: AdminIndex
				},
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

router.beforeEach((to, from, next) => {
	if (to.name.startsWith('admin') && !store.state.logged && 'admin.login' !== to.name) next({ name: 'admin.login' });
	else next();
});

const app = new Vue({
	el: '#app',
	store,
	router
});