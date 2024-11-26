import { Topic } from '../../index';

export const grade8Kiswahili: Topic[] = [
  {
    id: 'kusoma-na-kuandika',
    title: 'Kusoma na Kuandika',
    description: 'Kujifunza kusoma na kuandika kwa ufasaha zaidi',
    gradeLevel: 8,
    learningObjectives: [
      'Kutambua na kutumia herufi na sauti za Kiswahili kwa usahihi',
      'Kusoma na kuandika maneno na misemo mbalimbali',
      'Kutunga sentensi tata na kupanua msamiati',
      'Kuandika hadithi fupi na maelezo'
    ],
    subtopics: [
      {
        id: 'utambuzi-wa-herufi',
        title: 'Utambuzi wa Herufi na Sauti',
        content: 'Kujifunza kutumia herufi, sauti, na alama za kiimla kwa usahihi.',
        examples: [
          'Matumizi ya herufi na sauti',
          'Silabi na maneno',
          'Alama za uandishi'
        ],
        exercises: [
          {
            id: 'herufi-1',
            question: 'Ni herufi gani inayotumika kuandika sauti ya "ng\'?"',
            options: ['ng', 'ng\'', 'n', 'g'],
            correctAnswer: 1,
            explanation: 'Sauti ya "ng\'" inaandikwa kwa herufi "ng\'" na alama ya mkato.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'kusikiliza-na-kuzungumza',
    title: 'Kusikiliza na Kuzungumza',
    description: 'Kuimarisha stadi za mawasiliano ya mdomo',
    gradeLevel: 8,
    learningObjectives: [
      'Kushiriki katika mazungumzo tata',
      'Kusikiliza na kusimulia hadithi ndefu',
      'Kuboresha matamshi na lafudhi',
      'Kushiriki katika majadiliano'
    ],
    subtopics: [
      {
        id: 'mawasiliano',
        title: 'Mawasiliano ya Kwanza',
        content: 'Kujifunza kushiriki katika mazungumzo tata.',
        examples: [
          'Mazungumzo rasmi',
          'Majadiliano ya kikundi',
          'Hotuba na maelezo'
        ],
        exercises: [
          {
            id: 'mazungumzo-1',
            question: 'Ni njia ipi bora ya kuanza hotuba rasmi?',
            options: [
              'Jambo',
              'Mheshimiwa Mwenyekiti...',
              'Habari yako',
              'Mambo'
            ],
            correctAnswer: 1,
            explanation: 'Hotuba rasmi huanza kwa kutaja cheo cha mgeni rasmi.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'sarufi',
    title: 'Sarufi',
    description: 'Kujifunza kanuni za lugha ya Kiswahili',
    gradeLevel: 8,
    learningObjectives: [
      'Kutumia majina katika hali mbalimbali',
      'Kutumia vitenzi katika nyakati tofauti',
      'Kutumia vivumishi na viunganishi',
      'Kuimarisha matumizi ya lugha'
    ],
    subtopics: [
      {
        id: 'neno-jina',
        title: 'Neno Jina',
        content: 'Kujifunza matumizi ya majina katika hali mbalimbali.',
        examples: [
          'Ngeli za majina',
          'Umoja na wingi',
          'Majina ya milki'
        ],
        exercises: [
          {
            id: 'majina-1',
            question: 'Ni ngeli ipi sahihi ya neno "mtu"?',
            options: ['KI-VI', 'M-WA', 'M-MI', 'JI-MA'],
            correctAnswer: 1,
            explanation: 'Neno "mtu" liko katika ngeli ya M-WA (mtu-watu).',
            difficulty: 'medium'
          }
        ]
      }
    ]
  }
];