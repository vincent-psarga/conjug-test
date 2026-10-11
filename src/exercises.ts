export type Mode = 'retrouver' | 'conjuguer'

export const EXERCISES: Record<Mode, { title: string; instruction: string }> = {
  retrouver: {
    title: 'Exercice 1 : retrouver',
    instruction: 'Retrouve le pronom, l’infinitif et le temps de chaque verbe conjugué.',
  },
  conjuguer: {
    title: 'Exercice 2 : conjuguer',
    instruction: 'Conjugue chaque verbe avec le pronom et au temps indiqué.',
  },
}
