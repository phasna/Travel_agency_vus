import { defineStore } from 'pinia'
import api from '@/utils/axios'

interface ContactInfo {
  title: string
  content: string
}

interface FormInfo {
  title: string
  description: string
}

interface PageContent {
  id: number
  page_name: string
  title: string
  subtitle: string | null
  content: any
  meta_data: Record<string, any> | null
  created_at: string
  updated_at: string
  // Propriétés spécifiques pour la page Contact
  address?: ContactInfo
  phone?: ContactInfo
  email?: ContactInfo
  hours?: ContactInfo
  form?: FormInfo
}

interface PageContentState {
  pages: Record<string, PageContent>
  loading: boolean
  error: string | null
}

export const usePageContentStore = defineStore('pageContent', {
  state: (): PageContentState => ({
    pages: {},
    loading: false,
    error: null,
  }),

  getters: {
    getPageContent: (state) => (pageName: string) => {
      return state.pages[pageName] || null
    },
    getPageContentParsed: (state) => (pageName: string) => {
      const page = state.pages[pageName]
      if (!page) return null

      try {
        const parsedContent =
          typeof page.content === 'string' ? JSON.parse(page.content) : page.content
        return { ...page, ...parsedContent }
      } catch (error) {
        console.error('Error parsing page content:', error)
        return page
      }
    },
    getLoading: (state) => state.loading,
    getError: (state) => state.error,
  },

  actions: {
    async fetchPageContent(pageName: string) {
      this.loading = true
      this.error = null

      try {
        const response = await api.get(`/pages/${pageName}`)
        this.pages[pageName] = response.data
      } catch (error) {
        console.error('Error fetching page content:', error)
        this.error = 'Une erreur est survenue lors du chargement du contenu.'
      } finally {
        this.loading = false
      }
    },

    async fetchAllPages() {
      this.loading = true
      this.error = null

      try {
        const response = await api.get('/pages')
        response.data.forEach((page: PageContent) => {
          this.pages[page.page_name] = page
        })
      } catch (error) {
        console.error('Error fetching all pages:', error)
        this.error = 'Une erreur est survenue lors du chargement des pages.'
      } finally {
        this.loading = false
      }
    },
  },
})
