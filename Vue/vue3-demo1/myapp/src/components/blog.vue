import { Prop } from '../../../../vue-next-master/packages/runtime-core/src/componentProps';
<template>
  <div class="blogpost" :class="{highlighted: post.highlighted}">
    <h2>{{post.titlt}}</h2>
    <p>{{post.body}}</p>
    <p class="meta">written by {{post.author}} on {{post.datePosted}}</p>
    <p v-if="post.highlighted">This post is highlighted!</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
export interface Post {
  title: string;
  body: string;
  author: string;
  datePosted: Date;
  highlighted?: boolean
}

@Component
export default class BlogPost extends Vue {
  @Prop() private post!: Post
  get date() {
    return `${this.post.datePosted.getDate()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getFullYear()}`
  }
}
</script>

<style lang="stylus">
.blogpost
  &.highlighted
    border 1px solid green
    background #aaa
  h2
    text-decoration underline
  .meta
    font-style italic
</style>