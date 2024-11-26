import { Exercise } from '../../index';

export const grade8KiswahiliQuizzes: Exercise[] = [
  {
    id: 'quiz-1',
    question: 'Ni ngeli ipi sahihi ya neno "mwalimu"?',
    options: [
      'KI-VI',
      'M-WA',
      'M-MI',
      'JI-MA'
    ],
    correctAnswer: 1,
    explanation: 'Neno "mwalimu" liko katika ngeli ya M-WA (mwalimu-walimu).',
    difficulty: 'medium'
  },
  {
    id: 'quiz-2',
    question: 'Ni wakati gani unaotumika katika sentensi: "Wanafunzi wamesoma"?',
    options: [
      'Wakati uliopita',
      'Wakati uliopo',
      'Wakati timilifu',
      'Wakati ujao'
    ],
    correctAnswer: 2,
    explanation: '"Wamesoma" ni kitenzi katika wakati timilifu, kinaonyesha kitendo kilichokamilika.',
    difficulty: 'medium'
  },
  {
    id: 'quiz-3',
    question: 'Ni methali ipi inayofundisha umuhimu wa elimu?',
    options: [
      'Haraka haraka haina baraka',
      'Elimu ni ufunguo wa maisha',
      'Mchelea mwana kulia hulia yeye',
      'Pole pole ndio mwendo'
    ],
    correctAnswer: 1,
    explanation: 'Methali "Elimu ni ufunguo wa maisha" inasisitiza umuhimu wa elimu.',
    difficulty: 'medium'
  },
  {
    id: 'quiz-4',
    question: 'Ni neno lipi la kisasa lenye maana ya "simu ya mkononi"?',
    options: [
      'Rununu',
      'Tarakilishi',
      'Wavuti',
      'Barua pepe'
    ],
    correctAnswer: 0,
    explanation: '"Rununu" ni neno la Kiswahili la kisasa lenye maana ya simu ya mkononi.',
    difficulty: 'medium'
  },
  {
    id: 'quiz-5',
    question: 'Ni kiunganishi kipi kinachofaa katika sentensi: "Nilisoma ___ nikapita mtihani"?',
    options: [
      'lakini',
      'kwa hivyo',
      'ingawa',
      'na'
    ],
    correctAnswer: 3,
    explanation: 'Kiunganishi "na" kinatumika kuunganisha matendo mawili yaliyofanyika.',
    difficulty: 'medium'
  }
];