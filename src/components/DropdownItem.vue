<template>
  <div class="dropdown-item" :class="{disable}">
      <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropDownItem',
  props: {
    disable: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>
.dropdown-item{
    cursor: pointer;
    padding: .5rem 1rem;
    transition: background-color .15s ease-in-out;
}
.dropdown-item:hover{
    background-color: #eee;
}
.disable{
    pointer-events: none;
    color: #ddd;
    cursor: cell;
}
</style>
