<template>
  <div>
      <div class="zhuanlan-top">
        <h1 class="zhuanlan-logo">知乎专栏</h1>
        <h2 class="zhuanlan-subtitle">随心写作，自由表达</h2>
        <a class="btn zhuanlan-writebutton">开始写文章</a>
      </div>
      <div class="zhuanlan-faxian">
        <h1 class="zhuanlan-faxian-title">专栏 · 发现</h1>
        <ColumList :list="list"></ColumList>
      </div>
      <div class="zhuanlan-bottom">
        <h3 class="zhuanlan-bottom-title">在知乎创作</h3>
        <button class="btn zhuanlan-bottom-request">申请专栏</button>
      </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import ColumList from '../components/ColumList.vue'
import { useStore } from 'vuex'
import { GlobalProps } from '../store'
export default defineComponent({
  name: 'Home',
  components: {
    ColumList
  },
  setup () {
    const store = useStore<GlobalProps>()
    const list = computed(() => store.state.columns)
    return {
      list
    }
  }
})
</script>

<style scoped>
.zhuanlan-top{
background: url('../assets/patterns.png') 50% no-repeat;
height: 470px;
position: relative;
}
.zhuanlan-top::before{
  background: url('../assets/bg.png') repeat-x;
  background-size: 20px 450px;
  content: " ";
  position: absolute;
  width: 100%;
  height: 100%;
}
.zhuanlan-logo{
  background: url('../assets/logo.png');
  background-size: 129px 179px;
  height: 0;
  left: 50%;
  margin: 0 0 0 -65px;
  overflow: hidden;
  padding-top: 179px;
  position: absolute;
  top: 152px;
  width: 129px;
}
.zhuanlan-subtitle{
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: .5rem;
  line-height: 1.5rem;
  position: absolute;
  text-align: center;
  top: 350px;
  width: 100%;
}
.zhuanlan-writebutton{
  display: inline-block;
  box-sizing: border-box;
  left: 50%;
  transform: translateX(-50%);
  line-height: 2.25rem;
  position: absolute;
  top: 413px;
  width: 120px;
  height: 38px;
  text-align: center;
  font-size: .875rem;
  padding: 0 1rem;
}
.zhuanlan-faxian{
  margin-top: 3rem;
}
.zhuanlan-faxian-title{
  text-align: center;
  margin-bottom: 1rem;
  font-size: .875rem;
  font-weight: 600;
}
.zhuanlan-bottom{
  background: url('../assets/bg.png') repeat-x;
  background-size: 20px 450px;
  padding: 134px 0 2rem 0;
  margin-top: 2rem;
  text-align: center;
}
.zhuanlan-bottom-title{
  border: solid #97ffd8;
  border-width: 1px 0;
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: .875rem;
  padding: 1.625rem 0;
  white-space: nowrap;
  width: 345px;
  margin: 0 auto;
}
.zhuanlan-bottom-request{
  display: inline-block;
  line-height: 36px;
  margin-top: 40px;
  height: 38px;
  width: 120px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #444;
  border-color: #444;
  padding: 0 1rem;
  background-color: none;
}
</style>
