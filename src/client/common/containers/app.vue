<template>
	<div class="app clearfix">
		<v-header></v-header>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import app from 'common/services/app.service';

	import vHeader from 'common/containers/header.vue';

	export default {
		components: {
			vHeader,
		},

		created() {
			const data = window.__init_state;

			this.$store.commit(types.RECEIVE_USER_DATA, data.user);
			this.$store.commit(types.RECEIVE_DOMAINS_DATA, data.domains);
		},

		mounted() {

		},
	}
</script>
<style lang="sass">
	
</style>