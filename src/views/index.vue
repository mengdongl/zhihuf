<template>
  <div class="layout">
      <GlobalHeader :userinfo="userinfo"></GlobalHeader>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import GlobalHeader from '../components/GlobalHeader.vue'
import { useStore } from 'vuex'
import { GlobalProps } from '../store'
export default defineComponent({
  name: 'Index',
  components: {
    GlobalHeader
  },
  setup () {
    const store = useStore<GlobalProps>()
    const userinfo = computed(() => store.state.user)
    return {
      userinfo
    }
  }
})
</script>

<style scoped>
.layout{
}
.main{
  width: 90vw;
  margin: 0 auto;
  background-color: rgba(240, 240, 240, .3);
}
</style>
