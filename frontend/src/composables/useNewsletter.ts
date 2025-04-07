import { ref } from 'vue'

export function useNewsletter() {
  const newsletterEmail = ref('')
  const newsletterError = ref('')
  const newsletterSuccess = ref('')

  const handleNewsletterSubmit = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(newsletterEmail.value)) {
        newsletterError.value = 'Veuillez entrer une adresse email valide'
        return
      }

      await new Promise((resolve) => setTimeout(resolve, 1000))
      newsletterSuccess.value = 'Merci de votre inscription !'
      newsletterError.value = ''
      newsletterEmail.value = ''
      setTimeout(() => (newsletterSuccess.value = ''), 3000)
    } catch (error) {
      newsletterError.value = 'Une erreur est survenue. Veuillez réessayer.'
    }
  }

  return { newsletterEmail, newsletterError, newsletterSuccess, handleNewsletterSubmit }
}
