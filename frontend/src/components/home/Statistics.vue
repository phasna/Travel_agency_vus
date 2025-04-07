<template>
  <div class="bg-primary-600 text-white py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div class="p-2">
          <div class="text-3xl font-bold">{{ stats.clients }}</div>
          <div class="text-sm opacity-80">Clients satisfaits</div>
        </div>
        <div class="p-2">
          <div class="text-3xl font-bold">{{ stats.destinations }}+</div>
          <div class="text-sm opacity-80">Destinations</div>
        </div>
        <div class="p-2">
          <div class="text-3xl font-bold">{{ stats.experience }}+</div>
          <div class="text-sm opacity-80">Années d'expérience</div>
        </div>
        <div class="p-2">
          <div class="text-3xl font-bold">{{ stats.tours }}+</div>
          <div class="text-sm opacity-80">Circuits organisés</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { stats } from '@/data/destinationData'
</script>
