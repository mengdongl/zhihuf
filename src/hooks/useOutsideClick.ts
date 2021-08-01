import { ref, onMounted, onUnmounted, Ref } from 'vue'

function useOutsideClick (elementRef: Ref<HTMLElement | null>) {
  const isClickOutside = ref(false)
  const clickHandler = (e:MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    } else {
      isClickOutside.value = false
    }
  }
  onMounted(() => {
    document.addEventListener('click', clickHandler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', clickHandler)
  })
  return {
    isClickOutside
  }
}

export { useOutsideClick }
