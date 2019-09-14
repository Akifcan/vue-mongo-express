<script type="text/javascript">
	export default{
		created(){
			this.$store.dispatch('postDetail', this.$route.params.id)
		},
		computed:{
			postDetail(){
				return this.$store.getters.getPostDetail
			}
		}
	}
</script>

<template>
	<div>
		<h1>Post Detail</h1>
		<h1>{{ postDetail.title }}</h1>
		<p>{{ postDetail.content }}</p>
	</div>
</template>