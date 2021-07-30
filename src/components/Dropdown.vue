<template>
  <div class="dropdown">
      <a href="#" class="btn btn-outline-white" @click="handleDropDownClick">{{title}}</a>
      <div class="dropdown-menu" :style="{display:visable?'block':'none'}">
          <span class="Popover-arrow"></span>
          <slot></slot>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      default: '下拉框'
    }
  },
  setup () {
    const visable = ref(false)
    const handleDropDownClick = () => {
      visable.value = !visable.value
    }
    return {
      visable,
      handleDropDownClick
    }
  }
})
</script>

<style scoped>
.dropdown{
    position: relative;
}
.dropdown-menu{
    background-color: white;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 200px;
    max-height: 400px;
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgb(18 18 18 / 10%);
    text-align: left;
    color: #8590a6;
    padding: .2rem 0;
    margin-top: 1rem;
    transform: translateX(-50%);
    overflow-y: auto;
}
.dropdown-menu .Popover-arrow{
    position: absolute;
    width: 20px;
    height: 10px;
    top: 0;
    left: 50%;
    transform: translate(-50%,-100%);
    overflow: hidden;
}
.dropdown-menu .Popover-arrow::after{
    content: ' ';
    width: 20px;
    height: 20px;
    background-color: white;
    position: absolute;
    bottom: -20px;
    transform: rotate(45deg);
    border: 1px solid #ebebeb;
    box-shadow: 0 5px 20px rgb(18 18 18 / 10%);
}
</style>
