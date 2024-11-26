import { Exercise } from '../../index';

export const grade8EnglishQuizzes: Exercise[] = [
  {
    id: 'quiz-1',
    question: 'Which sentence uses parallel structure correctly?',
    options: [
      'He likes swimming, running, and to bike',
      'He likes swimming, running, and biking',
      'He likes to swim, ran, and biking',
      'He likes swimming, ran, and bikes'
    ],
    correctAnswer: 1,
    explanation: 'Parallel structure requires using the same grammatical form. "Swimming, running, and biking" all use the -ing form.',
    difficulty: 'medium'
  },
  {
    id: 'quiz-2',
    question: 'What type of essay requires you to examine both sides of an issue?',
    options: [
      'Narrative essay',
      'Descriptive essay',
      'Argumentative essay',
      'Personal essay'
    ],
    correctAnswer: 2,
    explanation: 'An argumentative essay requires examining and evaluating different sides of an issue to make a reasoned argument.',
    difficulty: 'medium'
  },
  {
    id: 'quiz-3',
    question: 'Which literary device is used in "Life is a roller coaster"?',
    options: [
      'Simile',
      'Metaphor',
      'Personification',
      'Alliteration'
    ],
    correctAnswer: 1,
    explanation: 'This is a metaphor because it directly compares life to a roller coaster without using "like" or "as".',
    difficulty: 'medium'
  },
  {
    id: 'quiz-4',
    question: 'What is the purpose of a thesis statement?',
    options: [
      'To end an essay',
      'To state the main argument',
      'To list all topics',
      'To thank the reader'
    ],
    correctAnswer: 1,
    explanation: 'A thesis statement presents the main argument or central idea of an essay or research paper.',
    difficulty: 'medium'
  },
  {
    id: 'quiz-5',
    question: 'Which is the best way to start a formal presentation?',
    options: [
      'Hey guys...',
      'Good morning and thank you for having me...',
      'Whatever...',
      'Let\'s get started...'
    ],
    correctAnswer: 1,
    explanation: 'A formal presentation should start with a proper greeting and acknowledgment of the audience.',
    difficulty: 'medium'
  }
];