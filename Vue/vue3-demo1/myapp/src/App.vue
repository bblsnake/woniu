<template>
  <div id="app">
    <button @click="toggle">Show/Hide highighted</button>
    <blog :post="blogPost" v-for="item in visibleBlogPost" :key="item.title"></blog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import blog, { Post } from './components/blog.vue';
import { AxiosResponse } from 'axios';
import axios from 'axios';

@Component({
  components: {
    blog
  },
})
export default class App extends Vue {
  private blogPost: Post[] = [
    {
			title: 'My first blogpost ever!',
			body: 'Lorem ipsum dolor sit amet.',
			author: 'Elke',
			datePosted: new Date(2019, 1, 18),
		},
		{
			title: 'Look I am blogging!',
			body: 'Hurray for me, this is my second post!',
			author: 'Elke',
			datePosted: new Date(2019, 1, 19),
		},
		{
			title: 'Another one?!',
			body: 'Another one!',
			author: 'Elke',
      datePosted: new Date(2019, 1, 20),
      highlighted: true,
		},

  ]
  public showHighlighted: boolean = true
  get visibleBlogPost() {
    return this.blogPost.filter((post: Post) => post.highlighted === undefined || post.highlighted === this.showHighlighted)
  }
  public toggle() {
    this.showHighlighted = !this.showHighlighted
  }
  public created() {
    axios.get('/request.json').then((res: AxiosResponse) => {
      // console.log(res);
      this.blogPost = res.data.blogposts.map((val: any) => ({
        title: val.title,
        body: val.body,
        author: val.author,
        datePosted: new Date(val.datePosted),
        highlighted: val.higtlighted,
      }))
    })
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
