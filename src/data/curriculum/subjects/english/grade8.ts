import { Topic } from '../../index';

export const grade8English: Topic[] = [
  {
    id: 'human-rights',
    title: 'Human Rights',
    description: 'Understanding human rights through language and communication',
    gradeLevel: 8,
    learningObjectives: [
      'Use polite language effectively',
      'Practice independent reading',
      'Master compound nouns',
      'Develop writing skills'
    ],
    subtopics: [
      {
        id: 'polite-language',
        title: 'Listening and Speaking: Polite Language',
        content: `# Polite Language

Learn to communicate respectfully and effectively about human rights.

## Key Points:
1. Using polite expressions
2. Making requests
3. Expressing opinions respectfully
4. Handling disagreements`,
        examples: [
          'Formal requests',
          'Polite disagreements',
          'Respectful discussions'
        ],
        exercises: [
          {
            id: 'polite-1',
            question: 'Which is the most polite way to make a request?',
            options: [
              'Give me that',
              'Would you mind passing that to me?',
              'I want that',
              'Pass it here'
            ],
            correctAnswer: 1,
            explanation: 'Using "Would you mind" is a polite way to make requests.',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'independent-reading',
        title: 'Reading: Independent Reading',
        content: `# Independent Reading

Develop skills for effective independent reading.

## Reading Strategies:
1. Setting reading goals
2. Choosing appropriate texts
3. Note-taking techniques
4. Comprehension monitoring`,
        examples: [
          'Human rights documents',
          'News articles',
          'Opinion pieces'
        ],
        exercises: [
          {
            id: 'reading-1',
            question: 'What is the best way to improve reading comprehension?',
            options: [
              'Reading quickly',
              'Active note-taking',
              'Skipping difficult words',
              'Reading without breaks'
            ],
            correctAnswer: 1,
            explanation: 'Active note-taking helps improve comprehension and retention.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'scientific-innovations',
    title: 'Scientific Innovations',
    description: 'Exploring scientific concepts through language',
    gradeLevel: 8,
    learningObjectives: [
      'Learn through songs',
      'Analyze simple poems',
      'Understand collective nouns',
      'Master punctuation'
    ],
    subtopics: [
      {
        id: 'songs',
        title: 'Listening and Speaking: Songs',
        content: `# Learning Through Songs

Using songs to understand scientific concepts.

## Elements:
1. Rhythm and rhyme
2. Scientific vocabulary
3. Memory techniques
4. Musical patterns`,
        examples: [
          'Science songs',
          'Educational rhymes',
          'Memory aids'
        ],
        exercises: [
          {
            id: 'songs-1',
            question: 'How do songs help in learning?',
            options: [
              'They are just fun',
              'They aid memory through patterns',
              'They are loud',
              'They take time'
            ],
            correctAnswer: 1,
            explanation: 'Songs help memory through patterns, rhythm, and repetition.',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'simple-poems',
        title: 'Reading: Simple Poems',
        content: `# Scientific Poetry

Understanding science through poetic expression.

## Poetry Elements:
1. Scientific themes
2. Metaphors
3. Imagery
4. Structure`,
        examples: [
          'Science-themed poems',
          'Nature poetry',
          'Technology verses'
        ],
        exercises: [
          {
            id: 'poems-1',
            question: 'What makes a good science poem?',
            options: [
              'Complex words only',
              'Clear imagery and accurate facts',
              'Random rhymes',
              'Long verses'
            ],
            correctAnswer: 1,
            explanation: 'Good science poetry combines clear imagery with accurate scientific facts.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  }
];