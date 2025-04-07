<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Ce que disent nos voyageurs</h2>
      <p class="mt-4 text-lg text-gray-500">Découvrez les expériences de nos clients satisfaits</p>
    </div>
    <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="bg-white rounded-lg shadow-lg p-6"
      >
        <div class="flex items-center">
          <img :src="testimonial.avatar" :alt="testimonial.name" class="h-12 w-12 rounded-full" />
          <div class="ml-4">
            <h4 class="text-lg font-medium text-gray-900">{{ testimonial.name }}</h4>
            <p class="text-gray-500">{{ testimonial.location }}</p>
          </div>
        </div>
        <p class="mt-4 text-gray-500">{{ testimonial.content }}</p>
        <div class="mt-4 flex items-center">
          <div class="flex items-center">
            <svg
              v-for="i in 5"
              :key="i"
              class="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { testimonials } from '@/data/destinationData'
</script>
