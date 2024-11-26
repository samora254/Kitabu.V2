import { Topic } from '../../index';

export const grade8Science: Topic[] = [
  {
    id: 'living-and-non-living-things',
    title: 'Living and Non-Living Things',
    description: 'Understanding characteristics and classifications of living things',
    gradeLevel: 8,
    learningObjectives: [
      'Identify detailed characteristics of living and non-living things',
      'Classify living things into plants and animals',
      'Explore habitats and ecosystems',
      'Understand life cycles and interactions',
      'Study endangered species and conservation'
    ],
    subtopics: [
      {
        id: 'characteristics',
        title: 'Sifa za Vito na Vivyo Vivu',
        content: 'Detailed study of characteristics distinguishing living from non-living things.',
        examples: [
          'Growth and reproduction',
          'Response to environment',
          'Need for food and water'
        ],
        exercises: [
          {
            id: 'living-1',
            question: 'Which characteristic is unique to living things?',
            options: [
              'Takes up space',
              'Has color',
              'Reproduces',
              'Has shape'
            ],
            correctAnswer: 2,
            explanation: 'Only living things can reproduce and create offspring.',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'ecosystems',
        title: 'Mazingira ya Vito',
        content: 'Understanding different habitats and ecosystem interactions.',
        examples: [
          'Food chains and webs',
          'Predator-prey relationships',
          'Symbiotic relationships'
        ],
        exercises: [
          {
            id: 'eco-1',
            question: 'What type of relationship exists when two species benefit from each other?',
            options: [
              'Predation',
              'Competition',
              'Mutualism',
              'Parasitism'
            ],
            correctAnswer: 2,
            explanation: 'Mutualism is a relationship where both species benefit from the interaction.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'biotechnology-and-genetics',
    title: 'Biotechnology and Genetic Engineering',
    description: 'Understanding modern biological technologies and their applications',
    gradeLevel: 8,
    learningObjectives: [
      'Understand basics of biotechnology',
      'Learn about genetic engineering',
      'Explore biotechnology applications',
      'Study ethical implications'
    ],
    subtopics: [
      {
        id: 'genetic-engineering',
        title: 'Ubunifu wa Kijeni',
        content: 'Introduction to genetic engineering and its applications.',
        examples: [
          'DNA structure',
          'Genetic modification',
          'Medical applications'
        ],
        exercises: [
          {
            id: 'biotech-1',
            question: 'Which is an application of genetic engineering in agriculture?',
            options: [
              'Building fences',
              'Creating disease-resistant crops',
              'Painting barns',
              'Making fertilizer'
            ],
            correctAnswer: 1,
            explanation: 'Genetic engineering is used to create crops that are resistant to diseases.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'earth-and-space',
    title: 'Earth and Space Sciences',
    description: 'Understanding Earth structure and space concepts',
    gradeLevel: 8,
    learningObjectives: [
      'Learn about Earth\'s structure',
      'Understand the solar system',
      'Study natural disasters',
      'Explore space technology'
    ],
    subtopics: [
      {
        id: 'earth-structure',
        title: 'Mazingira ya Dunia',
        content: 'Understanding Earth\'s layers and structure.',
        examples: [
          'Core and mantle',
          'Tectonic plates',
          'Volcanic activity'
        ],
        exercises: [
          {
            id: 'earth-1',
            question: 'What causes earthquakes?',
            options: [
              'Wind',
              'Rain',
              'Tectonic plate movement',
              'Temperature'
            ],
            correctAnswer: 2,
            explanation: 'Earthquakes are caused by the movement and collision of tectonic plates.',
            difficulty: 'medium'
          }
        ]
      }
    ]
  }
];