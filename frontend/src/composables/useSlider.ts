import { ref, onMounted, onUnmounted } from 'vue'
import type { Slide } from '@/types'

export function useSlider(slides: Slide[], interval = 5000) {
  const currentSlide = ref(0)
  let slideInterval: number | null = null

  const startSlideShow = () => {
    slideInterval = window.setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % slides.length
    }, interval)
  }

  onMounted(startSlideShow)
  onUnmounted(() => slideInterval && clearInterval(slideInterval))

  return { currentSlide, slides }
}
