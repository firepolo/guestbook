import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.use(VueRouter);

const app = new Vue({
	el: '#app',
	mounted() {
		console.log('MOUNTED');
	}
});