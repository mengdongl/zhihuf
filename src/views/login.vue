<template>
  <div class="login-page">
    <div class="login-page-content">
      <img class="login-logo" src="https://pic2.zhimg.com/80/v2-f6b1f64a098b891b4ea1e3104b5b71f6_720w.png" alt="知乎 logo">
      <div class="login-form">
        <validate-form @submit-form="submitform">
          <validate-input placeholder="请输入邮箱" v-model="account" :rules="rules"></validate-input>
          <validate-input type="password" placeholder="请输入密码" v-model="password" :rules="rules2"></validate-input>
          <template v-slot:submit>
              <button type="submit" class="btn btn-outline-primary" style="width:100%">登录</button>
          </template>
        </validate-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const rules = [{ type: 'required', message: '请输入邮箱' }, { type: 'email', message: '请输入正确格式邮箱' }]
const rules2 = [{ type: 'required', message: '请输入密码' }]
export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const account = ref('')
    const password = ref('')
    const submitform = (valid: boolean) => {
      if (valid) {
        store.commit('login')
        router.push({ name: 'home' })
      }
    }
    return {
      account,
      password,
      rules,
      rules2,
      submitform
    }
  }
})
</script>

<style scoped>
.login-page{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
    background-repeat: no-repeat;
    background-color: #b8e5f8;
    background-size: cover;
    width: 100%;
    height: 100vh;
    overflow: auto;
}
.login-page-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    min-height: 688px;
    height: calc(100% - 42px);
    box-sizing: border-box;
}
.login-logo{
    width: 128px;
    height: 81px;
    margin-bottom: 24px;
}
.login-form{
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    padding: 1.5rem 1.5rem 5.25rem;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgba(18,18,18,0.1);
    border-radius: 2px;
    background-color: #FFFFFF;
    width: 400px;
    overflow: hidden;
}
</style>
