import type { SearchType, BudgetOption, TripType } from '@/types'

export const searchTypes: SearchType[] = [
  {
    id: 'flight',
    label: 'Vol',
    icon: 'svg-flight',
  },
  {
    id: 'hotel',
    label: 'Hôtel',
    icon: 'svg-hotel',
  },
  {
    id: 'package',
    label: 'Forfait',
    icon: 'svg-package',
  },
  {
    id: 'activity',
    label: 'Activité',
    icon: 'svg-activity',
  },
]

export const budgetOptions: BudgetOption[] = [
  { value: 'economy', label: 'Économique' },
  { value: 'standard', label: 'Standard' },
  { value: 'luxury', label: 'Luxe' },
]

export const tripTypes: TripType[] = [
  { value: 'all', label: 'Tous les types' },
  { value: 'beach', label: 'Plage' },
  { value: 'mountain', label: 'Montagne' },
  { value: 'city', label: 'Ville' },
  { value: 'adventure', label: 'Aventure' },
]
