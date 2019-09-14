<script type="text/javascript">
	export default{
		created(){
			this.$store.dispatch('posts')
		},
		computed: {
			posts(){
				return this.$store.getters.getPosts
			}
		}
	}
</script>

<template>
	<div align="center" class="postParent">
		<router-link :to="{name: 'add'}">
			<button class="addNew">Add New</button>
		</router-link>
		<h3 class="titleFont">Posts</h3>
		<div class="postCard" v-for='post in posts'>
			<router-link :to="{name: 'post', params: {'id': post._id}}">
				<h4 class="titleFont">{{ post.title }}</h4>
			</router-link>
			<p class="contentFont">{{ post.content }}</p>
		</div>
	</div>
</template>

<style type="text/css">
@import url('https://fonts.googleapis.com/css?family=Chilanka&display=swap');
@import url('https://fonts.googleapis.com/css?family=Cute+Font&display=swap');
.addNew{
	height: 70px;
	width: 100px;
	box-shadow: 2px 2px 2px 2px;
	background-color: #9C27B0;
	color: white;
	font-family: 'Cute Font', cursive;
	font-size: 30px;
	transition: 0.5s;
}
.addNew:hover{
	transition: 0.5s;
	background-color: #FF9800;
}
.postParent{margin-top: 20px;}
.postCard{
	height: 450px;
	width: 50rem;
	border: solid 2px black;
	box-shadow: 2px 3px;
}
.titleFont{font-family: 'Chilanka', cursive; font-size: 30px;}
.contentFont{font-family: 'Chilanka', cursive; font-size: 30px;}
</style>