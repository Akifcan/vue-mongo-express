import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const URL = 'http://localhost:3000/api/posts'

export const store = new Vuex.Store({
	state:{
		posts: [],
		lastPost: [],
		postDetail: [],
	},
	getters:{
		getPosts(state){
			return state.posts
		},
		getLastPost(state){
			return state.lastPost
		},
		getPostDetail(state){
			return state.postDetail
		}
	},
	mutations:{
		setPosts(state, payload){
			return state.posts = payload
		},
		setLastPost(state, payload){
			return state.lastPost = payload
		},
		setPostDetail(state, payload){
			return state.postDetail = payload
		}
	},
	actions:{
		posts(vuexContext){
			axios.get(URL)
			.then(response => {
				vuexContext.commit('setPosts', response.data)
			})
		},
		addPost(vuexContext, payload){
			axios.post(URL+'/add', payload)
		},
		getLastPost(vuexContext){
			axios.get(URL+'/lastAdded')
			.then(response => {
				vuexContext.commit('setLastPost', response.data)
			})
		},
		postDetail(vuexContext, payload){
			axios.post(URL+'/detail', {'id': payload})
			.then(response => {
				vuexContext.commit('setPostDetail', response.data)
			})
		}
	}
})