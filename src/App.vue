<template lang='pug'>
	#app
		router-view
</template>

<script>
export default {
	data () {
		return {

		}
	},
	beforeMount () {
		this.checkLogin();
	},
	methods: {
		checkLogin () {
			this.$http.get('/who').then((resp) => {
				let data = resp.body.data;
				// console.log(data);
				if (data) {
					this.$store.commit('global/setUser', data[0]);
				}
			});
		}
	}
}
</script>

<style lang='sass'>
body, html
	height: 100%
	width: 100%
#app 
	width: 100% 
	height: 100% 
</style>
