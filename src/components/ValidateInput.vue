<template>
  <div class="validate-input">
      <input v-if="tag === 'input'" type="text" v-bind="$attrs" @blur="inputValidate" :value="modelValue" @input="updateValue" class="validate-input-input" :class="{'validate-error':inputRef.error}">
      <textarea v-if="tag === 'textarea'" v-bind="$attrs" @blur="inputValidate" :value="modelValue" @input="updateValue" class="validate-input-textarea" :class="{'validate-error':inputRef.error}"></textarea>
      <span class="validate-input-span" :class="{'validate-error':inputRef.error}">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { emitter, Func } from './ValidateForm.vue'
export interface ruleProps {
    type: 'required' | 'email'
    message: string
}
export type TagProps = 'input' | 'textarea'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  name: 'ValidateInput',
  inheritAttrs: false,
  props: {
    rules: {
      type: Array as PropType<ruleProps[]>
    },
    tag: {
      type: String as PropType<TagProps>,
      default: 'input'
    },
    modelValue: {
      type: String
    }
  },
  setup (props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: 'init'
    })
    const inputValidate:Func = () => {
      if (props.rules) {
        for (const i of props.rules) {
          switch (i.type) {
            case 'required':
              inputRef.error = inputRef.val.trim() === ''
              inputRef.message = i.message
              break
            case 'email':
              inputRef.error = !emailReg.test(inputRef.val)
              inputRef.message = i.message
              break
            default:
              break
          }
          if (inputRef.error) return false
        }
        return true
      } else {
        return true
      }
    }
    const clearInput = () => {
      inputRef.val = ''
      context.emit('update:modelValue', '')
      inputRef.error = false
      inputRef.message = 'init'
      return true
    }
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    emitter.emit('form-item-created', inputValidate)
    emitter.emit('form-item-clean', clearInput)
    return {
      inputRef,
      inputValidate,
      updateValue
    }
  }
})
</script>

<style>
.validate-input-input {
    display: inline-block;
    width: 100%;
    height: 2rem;
    padding: .25rem .625rem;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-sizing: border-box;
    outline: none;
}
.validate-input-textarea{
    display: inline-block;
    width: 100%;
    padding: .25rem .625rem;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-sizing: border-box;
    outline: none;
}
.validate-input-textarea:focus{
    border-color: #8590a6;
}
.validate-input-input:focus{
    border-color: #8590a6;
}
.validate-error{
    border-color: red!important;
    color: red;
    opacity: 1!important;
}
.validate-input-span{
    display: block;
    font-size: .5rem;
    opacity: 0;
}
</style>
