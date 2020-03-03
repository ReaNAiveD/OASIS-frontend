<template>
	<div class="document-list-head-search">
		<img src="@/assets/logo.png" width="40" alt="">
		<span>CSEIII</span>
		<el-select class="document-list-search" v-model="searchType">
			<el-option v-for="type in searchTypes" :key="type.value" :value="type.value" :label="type.label"/>
		</el-select>
		<el-input class="document-list-search search-input" v-model="searchKeyword" placeholder="请输入搜索内容"></el-input>
		<el-button class="document-list-search" type="primary" @click="clickSearch">搜索</el-button>
	</div>
</template>

<script>
	export default {
		name: 'SearchHeader',
		data() {
			return {
				combined: '',
				title: '',
				author: '',
				affiliation: '',
				// 这些数据需要传给父组件
				searchType: 'combined',
				searchTypes: [
					{
						value: 'author',
						label: '作者名称'
					}, {
						value: 'affiliation',
						label: '出版社'
					}, {
						value: 'title',
						label: '论文标题'
					}, {
						value: 'combined',
						label: '混合搜索'
					}],
				searchKeyword: ''
			}
		},
		methods: {
			// 将搜索框中的内容传递给父组件
			clickSearch() {
				this.combined = ''
				this.title = ''
				this.author = ''
				this.affiliation = ''
				switch (this.searchType) {
					case 'author':
						this.author = this.searchKeyword
						break
					case 'affiliation':
						this.affiliation = this.searchKeyword
						break
					case 'title':
						this.title = this.searchKeyword
						break
					case 'combined':
						this.combined = this.searchKeyword
						break
					default:
						break
				}
                this.$router.replace({
                    path: 'search',
                    query: {
                        author: this.author,
                        affiliation: this.affiliation,
                        title: this.title,
                        combined: this.combined
                    }
                })
				// console.log(this.combined)
				// console.log(this.author)
				this.$emit('clickSearch', this.combined, this.title, this.author, this.affiliation)
			},
			parsePath(){
				this.combined = this.$route.query.combined
				this.title = this.$route.query.title
				this.author = this.$route.query.author
				this.affiliation = this.$route.query.affiliation
				if (this.combined !== '') {
					this.searchType = 'combined'
					this.searchKeyword = this.combined
				} else if (this.author !== '') {
					this.searchType = 'author'
					this.searchKeyword = this.author
				} else if (this.title !== '') {
					this.searchType = 'title'
					this.searchKeyword = this.title
				} else if (this.affiliation !== '') {
					this.searchType = 'affiliation'
					this.searchKeyword = this.affiliation
				}
			}
		},
		watch:{
			$route(){
				console.log('router change')
				this.parsePath()
				this.clickSearch()
			}
		},
		// 子组件创建后将用户输入的搜索关键字绑定到界面上
		created() {
			console.log('SearchHeader created')
			this.parsePath()
			this.clickSearch()
		}
	}
</script>

<style scoped>

	.document-list-search {
		display: inline-block;
		margin: 5px;
	}

	.document-list-search.search-input {
		max-width: 400px;
		min-width: 200px;
	}

	.document-list-head-search {
		/*float: right;*/
		position: fixed;
		width: 100%;
		background-color: white;
		/*图层置顶*/
		z-index: 999;
		display: flex;
		align-items: center;
		padding-left: 30px;
		/*justify-content: center;*/
	}

	.document-list-head-search > * {
	}

	.el-select {
		margin-left: 90px;
	}

	.list-container {
		margin: 20px 0;
	}
</style>
