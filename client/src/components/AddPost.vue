<script type="text/javascript">
	export  default{
		created(){
			this.$store.dispatch('getLastPost')
		},
		data(){
			return{
				title: '',
				content: '',
			}
		},
		computed:{
			lastPost(){
				return this.$store.getters.getLastPost
			}
		},
		methods:{
			onAddPost(){
				const posts={
					'title': this.title,
					'content': this.content
				}
				this.$store.dispatch('addPost', posts)
			}
		},
		directives:{
			'color': {
				bind(el, binding, vnode){
					el.style.color = 'red'
				}
			}
		}
	}
</script>

<template>
	<div align="center" class="add">
		<form @submit.prevent='onAddPost()'>
			<input class="addTitle" type="text" placeholder="title" v-model='title'><br>
			<textarea class="addContent" placeholder="content" v-model='content'></textarea><br>
			<button class="addButton">Add</button>
		</form>
		<h3 v-color>Son Eklenen</h3>
		<h4>{{ lastPost.title }}</h4>
	</div>
</template>

<style type="text/css">
@import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');
.add{margin-top: 100px;}
.addTitle{
	height: 50px;
	width: 300px;
	font-size: 30px;
	text-indent: 30px;
	border-radius: 10px;
	font-family: 'Indie Flower', cursive;
}
.addContent{
	height: 100px;
	width: 300px;
	font-size: 30px;
	text-indent: 30px;
	border-radius: 10px;
	font-family: 'Indie Flower', cursive;
}
.addButton{
	height: 50px;
	width: 300px;
	font-size: 30px;
	font-family: 'Indie Flower', cursive;
	background-color: #FF5722;
	transition: 1.0s;
	color: white;

}
.addButton:hover{
	transition: 0.5s;
	background-color: #FF9800;
}
</style>