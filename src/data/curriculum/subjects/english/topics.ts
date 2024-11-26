import { Topic } from '../../index';

export const topics: Record<string, Topic[]> = {
  'scientific-innovations': [
    {
      id: 'songs-and-poems',
      title: 'Songs and Simple Poems',
      description: 'Exploring scientific concepts through songs and poetry',
      gradeLevel: 8,
      learningObjectives: [
        'Understand scientific concepts through songs',
        'Analyze simple poems about science',
        'Learn collective nouns',
        'Practice punctuation'
      ],
      subtopics: []  // To be implemented
    }
  ],
  'pollution': [
    {
      id: 'listening-comprehension',
      title: 'Listening Comprehension',
      description: 'Understanding environmental issues through listening',
      gradeLevel: 8,
      learningObjectives: [
        'Practice intensive listening',
        'Understand environmental texts',
        'Master primary auxiliaries',
        'Write sequenced ideas'
      ],
      subtopics: []  // To be implemented
    }
  ]
  // Additional topics will be implemented progressively
};