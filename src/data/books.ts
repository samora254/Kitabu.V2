interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  pdfUrl: string;
  subject: string;
  grade: number;
  description: string;
}

// Sample PDF from GitHub repository
const SAMPLE_PDF = 'https://raw.githubusercontent.com/samora254/Kitabu/main/trial-pdf.pdf';

export const books: Book[] = [
  // Mathematics Books
  {
    id: 'g8-math-1',
    title: 'Grade 8 Mathematics',
    author: 'Dennis Musau',
    coverImage: '/math.jpg',
    pdfUrl: SAMPLE_PDF,
    subject: 'Mathematics',
    grade: 8,
    description: 'Comprehensive Grade 8 Mathematics textbook covering algebra, geometry, and more.'
  },

  // English Books
  {
    id: 'g8-eng-1',
    title: 'Grade 8 English',
    author: 'Dennis Musau',
    coverImage: '/english.jpg',
    pdfUrl: SAMPLE_PDF,
    subject: 'English',
    grade: 8,
    description: 'Complete English textbook for Grade 8 students covering grammar, literature, and composition.'
  },

  // Kiswahili Books
  {
    id: 'g8-kis-1',
    title: 'Darasa la 8 Kiswahili',
    author: 'Dennis Musau',
    coverImage: '/kiswahili.jpg',
    pdfUrl: SAMPLE_PDF,
    subject: 'Kiswahili',
    grade: 8,
    description: 'Kitabu cha Kiswahili kwa wanafunzi wa darasa la nane.'
  },

  // Science Books
  {
    id: 'g8-sci-1',
    title: 'Grade 8 Science',
    author: 'Dennis Musau',
    coverImage: '/science.jpg',
    pdfUrl: SAMPLE_PDF,
    subject: 'Science',
    grade: 8,
    description: 'Comprehensive science textbook covering physics, chemistry, and biology.'
  },

  // Religious Education Books
  {
    id: 'g8-re-1',
    title: 'Grade 8 Religious Education',
    author: 'Dennis Musau',
    coverImage: '/religion.jpg',
    pdfUrl: SAMPLE_PDF,
    subject: 'Religious Education',
    grade: 8,
    description: 'Religious education textbook for Grade 8 students.'
  },

  // Home Science Books
  {
    id: 'g8-hs-1',
    title: 'Grade 8 Home Science',
    author: 'Dennis Musau',
    coverImage: '/homescience.jpg',
    pdfUrl: SAMPLE_PDF,
    subject: 'Home Science',
    grade: 8,
    description: 'Comprehensive home science textbook for Grade 8 students.'
  }
];