import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(VueRouter);

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = new Vue({
	el: '#app',
	mounted() {
		axios.get('/api/hello').then(response => {
			console.log(response);
		}).catch(error => {
			console.error(error);
		});

		console.log('MOUNTED');
	}
});