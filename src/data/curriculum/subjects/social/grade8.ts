import { Topic } from '../../index';

export const grade8Social: Topic[] = [
  {
    id: 'family-and-community',
    title: 'Family and Community',
    description: 'Understanding family structures and community dynamics',
    gradeLevel: 8,
    learningObjectives: [
      'Explore diverse family structures and dynamics',
      'Understand roles and responsibilities within families',
      'Learn about community helpers and institutions',
      'Study family challenges and solutions'
    ],
    subtopics: [
      {
        id: 'aina-za-familia',
        title: 'Aina za Familia',
        content: 'Exploring diverse family structures and dynamics.',
        examples: [
          'Extended family systems',
          'Family diversity',
          'Family relationships'
        ],
        exercises: [
          {
            id: 'family-1',
            question: 'What is the main benefit of extended family systems?',
            options: [
              'Less responsibility',
              'More support and resources',
              'Fewer rules',
              'Smaller homes'
            ],
            correctAnswer: 1,
            explanation: 'Extended family systems provide more support and resources through shared responsibilities and mutual assistance.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'government-and-leadership',
    title: 'Government and Leadership',
    description: 'Understanding government systems and leadership principles',
    gradeLevel: 8,
    learningObjectives: [
      'Learn about different forms of government',
      'Understand government branches and functions',
      'Study leadership qualities',
      'Explore democratic principles'
    ],
    subtopics: [
      {
        id: 'nadharia-za-serikali',
        title: 'Nadharia za Serikali',
        content: 'Understanding different forms of government and their functions.',
        examples: [
          'Democracy',
          'Monarchy',
          'Presidential system'
        ],
        exercises: [
          {
            id: 'govt-1',
            question: 'What are the three branches of government in Kenya?',
            options: [
              'Executive, Legislative, Judiciary',
              'President, Parliament, Police',
              'County, National, Local',
              'Ministers, MPs, Judges'
            ],
            correctAnswer: 0,
            explanation: 'Kenya\'s government has three branches: Executive (implements laws), Legislative (makes laws), and Judiciary (interprets laws).',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'economics-and-livelihoods',
    title: 'Economics and Livelihoods',
    description: 'Understanding economic concepts and financial literacy',
    gradeLevel: 8,
    learningObjectives: [
      'Learn basic economic concepts',
      'Understand business and entrepreneurship',
      'Study local and international trade',
      'Explore sustainable economics'
    ],
    subtopics: [
      {
        id: 'misingi-ya-uchumi',
        title: 'Misingi ya Uchumi',
        content: 'Understanding basic economic concepts and principles.',
        examples: [
          'Supply and demand',
          'Market systems',
          'Financial literacy'
        ],
        exercises: [
          {
            id: 'econ-1',
            question: 'What is the basic principle of supply and demand?',
            options: [
              'More supply increases prices',
              'When demand increases and supply stays the same, prices tend to rise',
              'Prices never change',
              'Supply has no effect on prices'
            ],
            correctAnswer: 1,
            explanation: 'When demand increases while supply remains constant, prices typically rise due to increased competition for limited resources.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  }
];