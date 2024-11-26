import { Topic } from '../../index';

export const grade8Mathematics: Topic[] = [
  {
    id: 'numbers-and-counting',
    title: 'Numbers and Counting',
    description: 'Understanding and working with numbers up to 10,000,000',
    gradeLevel: 8,
    learningObjectives: [
      'Count and identify numbers up to 10,000,000',
      'Order numbers in ascending and descending order',
      'Understand place value up to ten-millions',
      'Compare and order large numbers using symbols',
      'Identify prime and composite numbers'
    ],
    subtopics: [
      {
        id: 'counting-objects',
        title: 'Counting Objects',
        content: 'Learn to count and work with numbers up to 10,000,000.',
        examples: [
          'Counting by ones, tens, hundreds, thousands',
          'Skip counting patterns',
          'Number sequences to 10,000,000'
        ],
        exercises: [
          {
            id: 'count-1',
            question: 'What is the value of 7 in 7,564,321?',
            options: ['7', '70', '700', '7,000,000'],
            correctAnswer: 3,
            explanation: 'In 7,564,321, the 7 is in the millions place, so its value is 7,000,000.',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'prime-numbers',
        title: 'Prime and Composite Numbers',
        content: 'Understanding prime and composite numbers.',
        examples: [
          'Identifying prime numbers',
          'Finding factors',
          'Understanding multiples'
        ],
        exercises: [
          {
            id: 'prime-1',
            question: 'Which number is prime?',
            options: ['15', '21', '23', '25'],
            correctAnswer: 2,
            explanation: '23 is prime because its only factors are 1 and itself.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'algebra-and-patterns',
    title: 'Algebra and Patterns',
    description: 'Advanced algebraic concepts and pattern recognition',
    gradeLevel: 8,
    learningObjectives: [
      'Identify and create complex number patterns',
      'Use algebraic expressions and equations',
      'Solve equations with variables',
      'Understand and solve inequalities'
    ],
    subtopics: [
      {
        id: 'algebraic-expressions',
        title: 'Algebraic Expressions',
        content: 'Working with variables and expressions.',
        examples: [
          'Simplifying expressions',
          'Solving equations',
          'Understanding inequalities'
        ],
        exercises: [
          {
            id: 'algebra-1',
            question: 'Solve for x: 3x + 7 = 22',
            options: ['3', '5', '7', '15'],
            correctAnswer: 1,
            explanation: 'Subtract 7 from both sides: 3x = 15, then divide by 3: x = 5',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'geometry-and-trigonometry',
    title: 'Geometry and Trigonometry',
    description: 'Advanced geometric concepts and basic trigonometry',
    gradeLevel: 8,
    learningObjectives: [
      'Understand complex geometric shapes and their properties',
      'Apply Pythagoras theorem',
      'Learn basic trigonometric ratios',
      'Solve geometric problems'
    ],
    subtopics: [
      {
        id: 'trigonometry',
        title: 'Basic Trigonometry',
        content: 'Introduction to trigonometric concepts.',
        examples: [
          'Sine, cosine, tangent',
          'Right-angled triangles',
          'Angle measurements'
        ],
        exercises: [
          {
            id: 'trig-1',
            question: 'In a right triangle, what is the sine of an angle?',
            options: [
              'Adjacent/Hypotenuse',
              'Opposite/Adjacent',
              'Opposite/Hypotenuse',
              'Hypotenuse/Adjacent'
            ],
            correctAnswer: 2,
            explanation: 'The sine of an angle is the ratio of the opposite side to the hypotenuse.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  }
];