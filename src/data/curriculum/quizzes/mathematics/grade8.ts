import { Exercise } from '../../index';

export const grade8MathematicsQuizzes: Exercise[] = [
  // ALGEBRA
  {
    id: 'math8-alg-1',
    question: 'Solve for x: 2(x + 3) = 14',
    options: ['1', '4', '5', '7'],
    correctAnswer: 1,
    explanation: 'First distribute: 2x + 6 = 14, then subtract 6 from both sides: 2x = 8, finally divide by 2: x = 4',
    difficulty: 'medium'
  },
  {
    id: 'math8-alg-2',
    question: 'Which expression is equivalent to 3(x + 2) - 2(x - 1)?',
    options: ['x + 8', 'x + 4', '5x + 4', '5x + 8'],
    correctAnswer: 1,
    explanation: 'Distribute first: 3x + 6 - 2x + 2 = x + 8',
    difficulty: 'medium'
  },
  {
    id: 'math8-alg-3',
    question: 'If 3x + 12 = 24, what is the value of x?',
    options: ['2', '4', '6', '8'],
    correctAnswer: 2,
    explanation: 'Subtract 12 from both sides: 3x = 12, then divide by 3: x = 4',
    difficulty: 'medium'
  },

  // GEOMETRY
  {
    id: 'math8-geo-1',
    question: 'In a right triangle, if one angle is 30°, what is the other acute angle?',
    options: ['30°', '45°', '60°', '90°'],
    correctAnswer: 2,
    explanation: 'In a right triangle, angles sum to 180°. One angle is 90° and another is 30°, so 180° - 90° - 30° = 60°',
    difficulty: 'medium'
  },
  {
    id: 'math8-geo-2',
    question: 'What is the area of a circle with radius 5 units? (Use π = 3.14)',
    options: ['31.4', '78.5', '15.7', '25'],
    correctAnswer: 1,
    explanation: 'Area = πr². Area = 3.14 × 5² = 3.14 × 25 = 78.5 square units',
    difficulty: 'medium'
  },
  {
    id: 'math8-geo-3',
    question: 'In a right triangle with sides 3 and 4, what is the length of the hypotenuse?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 0,
    explanation: 'Using Pythagorean theorem: a² + b² = c². 3² + 4² = c². 9 + 16 = 25. √25 = 5',
    difficulty: 'medium'
  },

  // STATISTICS
  {
    id: 'math8-stat-1',
    question: 'What is the mean of the numbers: 15, 20, 25, 30, 35?',
    options: ['20', '25', '30', '35'],
    correctAnswer: 1,
    explanation: 'Sum (125) divided by count (5) equals 25',
    difficulty: 'medium'
  },
  {
    id: 'math8-stat-2',
    question: 'What is the median of the numbers: 12, 15, 18, 21, 24?',
    options: ['15', '18', '21', '24'],
    correctAnswer: 1,
    explanation: 'In an ordered list with odd count, median is the middle number. Here, it\'s 18',
    difficulty: 'medium'
  },
  {
    id: 'math8-stat-3',
    question: 'If you roll a fair six-sided die, what is the probability of getting an even number?',
    options: ['1/6', '1/3', '1/2', '2/3'],
    correctAnswer: 2,
    explanation: 'Even numbers on a die are 2, 4, and 6. Probability = 3/6 = 1/2',
    difficulty: 'medium'
  },

  // RATIOS AND PROPORTIONS
  {
    id: 'math8-ratio-1',
    question: 'If 3:5 = x:40, what is the value of x?',
    options: ['21', '24', '27', '30'],
    correctAnswer: 1,
    explanation: 'Using proportion: 3/5 = x/40, cross multiply: 5x = 3(40), so x = 120/5 = 24',
    difficulty: 'medium'
  },
  {
    id: 'math8-ratio-2',
    question: 'A map has a scale of 1:1000. If a distance on the map is 5 cm, what is the actual distance in meters?',
    options: ['50', '500', '5000', '50000'],
    correctAnswer: 0,
    explanation: '1 cm on map = 1000 cm in reality. 5 × 1000 = 5000 cm = 50 m',
    difficulty: 'medium'
  },

  // REAL-WORLD APPLICATIONS
  {
    id: 'math8-app-1',
    question: 'A store offers a 15% discount on a $80 item. What is the final price?',
    options: ['$65', '$68', '$70', '$72'],
    correctAnswer: 1,
    explanation: '15% of $80 = $12 discount. Final price = $80 - $12 = $68',
    difficulty: 'medium'
  },
  {
    id: 'math8-app-2',
    question: 'If a car travels 240 miles in 4 hours, what is its average speed in miles per hour?',
    options: ['55', '60', '65', '70'],
    correctAnswer: 1,
    explanation: 'Speed = distance/time = 240/4 = 60 miles per hour',
    difficulty: 'medium'
  },

  // EXPONENTS AND SCIENTIFIC NOTATION
  {
    id: 'math8-exp-1',
    question: 'What is 2³ × 2⁴?',
    options: ['2⁷', '2⁶', '2⁵', '2¹²'],
    correctAnswer: 0,
    explanation: 'When multiplying powers with the same base, add the exponents: 2³ × 2⁴ = 2³⁺⁴ = 2⁷',
    difficulty: 'medium'
  },
  {
    id: 'math8-exp-2',
    question: 'Express 45,000 in scientific notation',
    options: ['4.5 × 10⁴', '4.5 × 10⁵', '45 × 10³', '450 × 10²'],
    correctAnswer: 0,
    explanation: 'Move decimal point 4 places left: 4.5 × 10⁴',
    difficulty: 'medium'
  }
];