<template>
  <div class="container">
    <div class="colum-itme" v-for="colum of columList" :key="colum.id">
      <div class="card">
        <img :src="colum.avatar" />
        <h5 class="text-overflow">{{ colum.title }}</h5>
        <p class="info">{{ colum.description }}</p>
        <p class="meta">970 人关注|790 篇文章</p>
        <router-link class="btn btn-outline-primary" :to="{ name: 'colum', params: { id: colum.id } }">进入专栏</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, toRefs } from 'vue'
export interface ColumProps {
  id: number;
  avatar?: string;
  title: string;
  description: string;
}
export default defineComponent({
  name: 'ColumList',
  props: {
    list: {
      type: Array as PropType<ColumProps[]>,
      required: true
    }
  },
  setup (props) {
    const { list } = toRefs(props)
    const columList = computed(() => {
      return list.value.map(item => {
        if (!item.avatar) {
          item.avatar = require('../assets/logo.png')
        }
        return item
      })
    })
    return {
      columList
    }
  }
})
</script>

<style scoped >
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.colum-itme {
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 25%;
  max-width: 25%;
  padding: 1rem;
  text-align: center;
}
.card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  padding: 1rem;
  background-color: white;
}
.card img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 1rem 0;
    box-sizing: border-box;
}
.card h5{
    font-size: 1.25rem;
    margin-bottom: .5rem;
    margin-top: 0;
    font-weight: 500;
}
.card p{
    font-size: 1rem;
    color: #6c757d;
    font-weight: 400;
    margin: 1rem 0 0;
    line-height: 1rem;
    height: 3rem;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
}
.card .meta{
    height: 1rem;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 1rem;
}
.text-overflow{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
