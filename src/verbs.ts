// Verb pools, picked from https://www.conjugaisons.net/verbes/groupe/{1,2,3}/.
// 1st-group verbs are limited to ones without spelling changes (no -cer, -ger,
// -eler, -yer...) so the regular rules in conjugation.ts stay correct.

export type Pronoun = 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils'
export type Tense = 'présent' | 'imparfait' | 'futur simple'

export const PRONOUNS: Pronoun[] = ['je', 'tu', 'il', 'nous', 'vous', 'ils']
export const TENSES: Tense[] = ['présent', 'imparfait', 'futur simple']

export type Verb =
  | { infinitive: string; group: 1 | 2 }
  | {
      infinitive: string
      group: 3 | 'auxiliaire'
      // présent forms, in PRONOUNS order
      present: [string, string, string, string, string, string]
      imparfaitStem: string
      futurStem: string
    }

type IrregularVerb = Extract<Verb, { present: unknown }>

function irregular(
  infinitive: string,
  present: string,
  imparfaitStem: string,
  futurStem: string,
  group: 3 | 'auxiliaire' = 3,
): IrregularVerb {
  return {
    infinitive,
    group,
    present: present.split(' ') as IrregularVerb['present'],
    imparfaitStem,
    futurStem,
  }
}

export const ETRE = irregular('être', 'suis es est sommes êtes sont', 'ét', 'ser', 'auxiliaire')
export const AVOIR = irregular('avoir', 'ai as a avons avez ont', 'av', 'aur', 'auxiliaire')
export const ALLER = irregular('aller', 'vais vas va allons allez vont', 'all', 'ir')

export const GROUP_1: Verb[] = [
  'parler', 'chanter', 'danser', 'aimer', 'regarder', 'écouter', 'jouer',
  'marcher', 'travailler', 'donner', 'trouver', 'penser', 'porter', 'montrer',
  'rester', 'arriver', 'entrer', 'demander', 'chercher', 'laver', 'fermer',
  'garder', 'oublier', 'crier', 'préparer', 'habiter', 'tomber', 'sauter',
  'dessiner', 'raconter',
].map((infinitive) => ({ infinitive, group: 1 }))

export const GROUP_2: Verb[] = [
  'finir', 'choisir', 'grandir', 'réussir', 'rougir', 'remplir', 'obéir',
  'réfléchir', 'bâtir', 'punir', 'nourrir', 'guérir', 'applaudir', 'agir',
  'bondir', 'blanchir', 'ralentir', 'salir', 'vieillir', 'maigrir',
].map((infinitive) => ({ infinitive, group: 2 }))

export const GROUP_3: Verb[] = [
  irregular('faire', 'fais fais fait faisons faites font', 'fais', 'fer'),
  irregular('prendre', 'prends prends prend prenons prenez prennent', 'pren', 'prendr'),
  irregular('venir', 'viens viens vient venons venez viennent', 'ven', 'viendr'),
  irregular('dire', 'dis dis dit disons dites disent', 'dis', 'dir'),
  irregular('voir', 'vois vois voit voyons voyez voient', 'voy', 'verr'),
  irregular('pouvoir', 'peux peux peut pouvons pouvez peuvent', 'pouv', 'pourr'),
  irregular('vouloir', 'veux veux veut voulons voulez veulent', 'voul', 'voudr'),
  irregular('savoir', 'sais sais sait savons savez savent', 'sav', 'saur'),
  irregular('devoir', 'dois dois doit devons devez doivent', 'dev', 'devr'),
  irregular('mettre', 'mets mets met mettons mettez mettent', 'mett', 'mettr'),
  irregular('partir', 'pars pars part partons partez partent', 'part', 'partir'),
  irregular('sortir', 'sors sors sort sortons sortez sortent', 'sort', 'sortir'),
  irregular('dormir', 'dors dors dort dormons dormez dorment', 'dorm', 'dormir'),
  irregular('lire', 'lis lis lit lisons lisez lisent', 'lis', 'lir'),
  irregular('écrire', 'écris écris écrit écrivons écrivez écrivent', 'écriv', 'écrir'),
  irregular('boire', 'bois bois boit buvons buvez boivent', 'buv', 'boir'),
  irregular('courir', 'cours cours court courons courez courent', 'cour', 'courr'),
  irregular('ouvrir', 'ouvre ouvres ouvre ouvrons ouvrez ouvrent', 'ouvr', 'ouvrir'),
  irregular('offrir', 'offre offres offre offrons offrez offrent', 'offr', 'offrir'),
  irregular('connaître', 'connais connais connaît connaissons connaissez connaissent', 'connaiss', 'connaîtr'),
  irregular('croire', 'crois crois croit croyons croyez croient', 'croy', 'croir'),
  irregular('tenir', 'tiens tiens tient tenons tenez tiennent', 'ten', 'tiendr'),
  irregular('recevoir', 'reçois reçois reçoit recevons recevez reçoivent', 'recev', 'recevr'),
  irregular('mourir', 'meurs meurs meurt mourons mourez meurent', 'mour', 'mourr'),
  irregular('attendre', 'attends attends attend attendons attendez attendent', 'attend', 'attendr'),
  irregular('perdre', 'perds perds perd perdons perdez perdent', 'perd', 'perdr'),
  irregular('vendre', 'vends vends vend vendons vendez vendent', 'vend', 'vendr'),
  irregular('rire', 'ris ris rit rions riez rient', 'ri', 'rir'),
]
