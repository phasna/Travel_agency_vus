<template>
  <div class="bg-white">
    <!-- Hero section -->
    <div class="relative h-[50vh]">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Services"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-75"
        ></div>
      </div>
      <div class="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nos Services
          </h1>
          <p class="mt-6 text-xl text-gray-300">
            Une gamme complète de services pour rendre votre voyage inoubliable.
          </p>
        </div>
      </div>
    </div>

    <!-- Services principaux -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          class="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-1 transition duration-300"
        >
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
            <svg
              class="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="mt-4 text-lg font-medium text-gray-900">Voyages sur mesure</h3>
          <p class="mt-2 text-gray-500">
            Créez votre voyage idéal avec l'aide de nos experts en voyage personnalisé.
          </p>
        </div>

        <div
          class="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-1 transition duration-300"
        >
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
            <svg
              class="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="mt-4 text-lg font-medium text-gray-900">Assistance 24/7</h3>
          <p class="mt-2 text-gray-500">
            Notre équipe est disponible à tout moment pour vous accompagner pendant votre voyage.
          </p>
        </div>

        <div
          class="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-1 transition duration-300"
        >
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
            <svg
              class="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 class="mt-4 text-lg font-medium text-gray-900">Voyages sécurisés</h3>
          <p class="mt-2 text-gray-500">
            Profitez de nos voyages en toute sécurité avec une assurance voyage complète.
          </p>
        </div>
      </div>
    </div>

    <!-- Services additionnels -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Services additionnels</h2>
          <p class="mt-4 text-lg text-gray-500">
            Des services supplémentaires pour enrichir votre expérience de voyage
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="bg-white rounded-lg shadow p-6">
            <h4 class="text-lg font-medium text-gray-900">Transferts</h4>
            <p class="mt-2 text-sm text-gray-500">
              Service de transfert privé ou partagé vers votre hébergement
            </p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h4 class="text-lg font-medium text-gray-900">Guides locaux</h4>
            <p class="mt-2 text-sm text-gray-500">
              Guides professionnels parlant français pour vos visites
            </p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h4 class="text-lg font-medium text-gray-900">Activités</h4>
            <p class="mt-2 text-sm text-gray-500">
              Réservation d'activités et d'excursions sur place
            </p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h4 class="text-lg font-medium text-gray-900">Assurance</h4>
            <p class="mt-2 text-sm text-gray-500">
              Assurance voyage complète pour votre tranquillité
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section FAQ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Questions fréquentes</h2>
        <p class="mt-4 text-lg text-gray-500">Tout ce que vous devez savoir sur nos services</p>
      </div>

      <div class="mt-12 space-y-8">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-lg font-medium text-gray-900">{{ faq.question }}</h3>
          <p class="mt-2 text-gray-500">{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    <!-- Section CTA -->
    <div class="bg-primary-600">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div class="lg:w-0 lg:flex-1">
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Prêt à partir en voyage ?
          </h2>
          <p class="mt-3 max-w-3xl text-lg leading-6 text-primary-100">
            Contactez-nous pour planifier votre prochain voyage avec nos experts.
          </p>
        </div>
        <div class="mt-8 lg:mt-0 lg:ml-8">
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
          >
            Nous contacter
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Comment fonctionne le service de voyage sur mesure ?',
    answer:
      'Nos experts en voyage vous accompagnent dans la création de votre voyage idéal. Nous prenons en compte vos préférences, votre budget et vos contraintes pour vous proposer une offre personnalisée.',
  },
  {
    question: "Quelle est la couverture de l'assurance voyage ?",
    answer:
      "Notre assurance voyage couvre les frais médicaux, l'annulation, le rapatriement, la perte de bagages et bien plus encore. Les détails complets sont disponibles dans nos conditions générales.",
  },
  {
    question: 'Comment réserver un guide local ?',
    answer:
      "Vous pouvez réserver un guide local lors de la réservation de votre voyage ou jusqu'à 48h avant votre arrivée. Nos guides sont tous francophones et certifiés.",
  },
  {
    question: 'Quels sont les moyens de paiement acceptés ?',
    answer:
      'Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), les virements bancaires et les paiements en plusieurs fois sans frais.',
  },
])
</script>
