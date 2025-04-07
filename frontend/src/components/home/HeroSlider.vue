<template>
  <div class="relative h-[80vh]">
    <div class="absolute inset-0">
      <transition-group name="fade">
        <img
          v-for="(slide, index) in slides"
          :key="slide.id"
          v-show="currentSlide === index"
          :src="slide.image"
          :alt="slide.title"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </transition-group>
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-75"></div>
    </div>
    <div class="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl">
        <transition-group name="fade">
          <div v-show="currentSlide === 0" key="slide1">
            <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Découvrez le monde avec nous
            </h1>
            <p class="mt-6 text-xl text-gray-300">
              Explorez des destinations incroyables, créez des souvenirs inoubliables et
              laissez-nous vous guider dans vos aventures.
            </p>
          </div>
          <div v-show="currentSlide === 1" key="slide2">
            <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Des expériences uniques
            </h1>
            <p class="mt-6 text-xl text-gray-300">
              Des voyages sur mesure pour des moments inoubliables en famille ou entre amis.
            </p>
          </div>
          <div v-show="currentSlide === 2" key="slide3">
            <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Des offres exceptionnelles
            </h1>
            <p class="mt-6 text-xl text-gray-300">
              Profitez de nos meilleures offres pour vos prochaines vacances.
            </p>
          </div>
        </transition-group>
        <div class="mt-10 flex space-x-4">
          <router-link
            to="/destinations"
            class="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition duration-300"
          >
            Explorer les destinations
          </router-link>
          <router-link
            to="/booking"
            class="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Réserver maintenant
          </router-link>
        </div>
      </div>
    </div>
    <!-- Contrôles du slider -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        @click="currentSlide = index"
        class="w-3 h-3 rounded-full"
        :class="currentSlide === index ? 'bg-white' : 'bg-white/50'"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlider } from '@/composables/useSlider'
import { slides } from '@/data/sliderData'

const { currentSlide } = useSlider(slides)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
