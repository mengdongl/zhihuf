<template>
  <form>
      <slot></slot>
      <div class="validate-bottom">
          <div class="validate-form-submit" @click.prevent="submitFrom">
          <slot name="submit">
              <button type="submit" class="btn btn-outline-primary">提交</button>
          </slot>
      </div>
      <!-- <div class="validate-form-submit" @click.prevent="clearInputs">
          <slot name="clean">
              <button type="submit" class="btn btn-outline-primary">清空</button>
          </slot>
      </div> -->
      </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import emitt from 'emitt'
export const emitter = emitt()
export type Func = ()=>boolean
export default defineComponent({
  name: 'ValidateForm',
  emits: ['submit-form'],
  setup (props, context) {
    let cbs:Func[] = []
    let cleanCbs:Func[] = []
    const submitFrom = () => {
      const valid = cbs.map(item => item()).every(item => item)
      context.emit('submit-form', valid)
    }
    const clearInputs = () => {
      console.log('clearInputs')
      return cleanCbs.every(item => item())
    }
    const callback = (cb:Func) => {
      cbs.push(cb)
    }
    const cleanCallback = (cb:Func) => {
      cleanCbs.push(cb)
    }
    emitter.on('form-item-created', callback)
    emitter.on('form-item-clean', cleanCallback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      emitter.off('form-item-clean', cleanCallback)
      cbs = []
      cleanCbs = []
    })
    return {
      submitFrom,
      clearInputs
    }
  }
})
</script>

<style>
.validate-bottom{
    display: flex;
}
.validate-form-submit{
    width: 100%;
}
</style>
