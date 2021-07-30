<template>
<nav>
    <div class="navbar">
        <a href="#" class="navbar-brand">知乎</a>
        <ul class="btn-group" v-if="!userinfo.islogin">
            <li><a href="#" class="btn btn-outline-white">登录</a></li>
            <li><a href="#" class="btn btn-outline-white">注册</a></li>
        </ul>
        <ul class="btn-group" v-else>
          <li><Dropdown :title="'你好'+userinfo.name">
            <dropdown-item disable>选项1</dropdown-item>
            <dropdown-item >选项2</dropdown-item>
            <dropdown-item disable>选项3</dropdown-item>
            </Dropdown></li>
        </ul>
    </div>
</nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
export interface UserProps {
    islogin: boolean;
    name?: string;
    id?: number
}
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    userinfo: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>

<style scoped>
nav{
    width: 100%;
    background-color: #0d6efd;
    padding: 0 1.5rem;
    margin-bottom: 1.5rem;
    box-sizing: border-box;
}
.navbar{
    width: 70%;
    height: 10vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar-brand{
    color: white;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
}
.navbar .btn-group{
  display: flex;
  list-style: none;
}
.btn-group a{
  margin-right: 1rem;
}
</style>
