/*
* @Author: frontendzhifei
* @Date:   2017-05-01 00:39:23
* @Last Modified by:   frontendzhifei
* @Last Modified time: 2017-06-04 00:53:21
*/
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './containers/app.vue';
import index from '../home/index.js';

Vue.use(VueRouter);

export default function() {

	// const router = new VueRouter({
	// 	mode: 'history',
	// 	// routes: clientRoutes,
	// 	scrollBehavior() {
	// 		return { x:0, y:0 };
	// 	}
	// });

	new Vue({
		// router,
		render: h => h(App),
	}).$mount('app');
}