<template>
  <div class="layout">
      <GlobalHeader :userinfo="userinfo"></GlobalHeader>
    <main>
      <ColumList :list="list"></ColumList>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumList, { ColumProps } from './components/ColumList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
const testData : ColumProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是的test3专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是的test4专栏，有一段非常有意思的简介，可以更新一下欧'
  }
]
const testUser : UserProps = {
  islogin: true,
  name: '蒙栋禄',
  id: 1
}
export default defineComponent({
  name: 'App',
  components: {
    ColumList,
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      userinfo: testUser
    }
  }
})
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.btn{
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid ;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn-outline-white{
  color: aliceblue;
  border-color: aliceblue;
}
.btn-outline-white:hover{
  color: #333;
  border-color: aliceblue;
  background-color: aliceblue;
}
.btn-outline-primary{
    color: #0d6efd;
    border-color: #0d6efd;
}
.btn-outline-primary:hover{
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
}
</style>
<style scoped>
.layout{
}
main{
  width: 90vw;
  margin: 0 auto;
}
</style>
