<template>
<div class="create-content">
<validate-form class="create-content-form" @submit-form="submitForm">
    <validate-input placeholder="文章标题" v-model="title"></validate-input>
    <validate-input placeholder="文章详情" tag="textarea" rows="10"  v-model="detail"></validate-input>
    <template #submit>
      <button type="submit" class="btn btn-outline-primary" style="width:100%">提交</button>
    </template>
  </validate-form>
</div>
</template>

<script lang="ts">
import ValidateInput from '@/components/ValidateInput.vue'
import { defineComponent, ref } from 'vue'
import ValidateForm from '../components/ValidateForm.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalProps } from '../store'
import { PostProps } from '../testData'
export default defineComponent({
  name: 'createpost',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const router = useRouter()
    const store = useStore<GlobalProps>()
    const title = ref('')
    const detail = ref('')
    const submitForm = (valid: boolean) => {
      if (valid) {
        const columnId = store.state.user.columnId
        if (columnId) {
          const newPost:PostProps = {
            id: new Date().getTime(),
            title: title.value,
            content: detail.value,
            createdAt: new Date().toLocaleString(),
            columnId: columnId
          }
          store.commit('addPost', newPost)
          router.push({ name: 'colum', params: { id: columnId } })
        }
      }
    }
    return {
      title,
      detail,
      submitForm
    }
  }
})
</script>

<style scoped>
.create-content{
    box-sizing: border-box;
    padding: 2rem;
}
.create-content-form{
    width: 70%;
    margin: 0 auto;
}
</style>
