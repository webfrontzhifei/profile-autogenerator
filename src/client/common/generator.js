/*
* @Author: frontendzhifei
* @Date:   2017-05-01 00:39:23
* @Last Modified by:   frontendzhifei
* @Last Modified time: 2017-05-01 13:25:20
*/
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../common/containers/app.vue';

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