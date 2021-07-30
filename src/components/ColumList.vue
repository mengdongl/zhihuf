<template>
  <div class="container">
    <div class="colum-itme" v-for="colum of columList" :key="colum.id">
      <div class="card">
        <img :src="colum.avatar" />
        <h5 class="text-overflow">{{ colum.title }}</h5>
        <p>{{ colum.description }}</p>
        <a class="btn btn-outline-primary" href="#">进入专栏</a>
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
  flex-basis: 33%;
  max-width: 33.33%;
  padding: 1rem;
  text-align: center;
}
.card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  padding: 1rem;
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
    margin: 0 0 1rem;
    line-height: 1rem;
    height: 3rem;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
}
.text-overflow{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
