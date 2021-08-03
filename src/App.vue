<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
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
