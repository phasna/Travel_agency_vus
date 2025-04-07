<template>
  <div class="bg-white">
    <Statistics />
    <HeroSlider />
    <SearchBar />
    <PopularDestinations />
    <Services />
    <Testimonials />
    <Newsletter />
  </div>
</template>

<script setup lang="ts">
import Statistics from '@/components/home/Statistics.vue'
import HeroSlider from '@/components/home/HeroSlider.vue'
import SearchBar from '@/components/home/SearchBar.vue'
import PopularDestinations from '@/components/home/PopularDestinations.vue'
import Services from '@/components/home/Services.vue'
import Testimonials from '@/components/home/Testimonials.vue'
import Newsletter from '@/components/home/Newsletter.vue'
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

/* Animations pour les cartes de destination */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Animation pour les badges */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.bg-red-500 {
  animation: pulse 2s infinite;
}

/* Styles pour les suggestions */
.suggestions-enter-active,
.suggestions-leave-active {
  transition: opacity 0.2s ease;
}

.suggestions-enter-from,
.suggestions-leave-to {
  opacity: 0;
}

/* Style pour le bouton de recherche désactivé */
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
