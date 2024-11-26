interface AudioBookData {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  audioUrl: string;
  duration: string;
  grade: number;
  date: string;
}

// Sample audio from GitHub repository
const SAMPLE_AUDIO = 'https://raw.githubusercontent.com/samora254/Kitabu/main/Trial-audio.mp3';

export const audioBooks: AudioBookData[] = [
  // Grade 8 Audio Books
  {
    id: 'g8-math-1',
    title: 'Advanced Mathematics',
    author: 'Dennis Musau',
    coverImage: '/covers/math-8.jpg',
    audioUrl: SAMPLE_AUDIO,
    duration: '03:09',
    grade: 8,
    date: 'Oct 28th 2024 4:45 PM'
  },
  {
    id: 'g8-eng-1',
    title: 'Literature Studies',
    author: 'Dennis Musau',
    coverImage: '/covers/eng-8.jpg',
    audioUrl: SAMPLE_AUDIO,
    duration: '03:09',
    grade: 8,
    date: 'Oct 28th 2024 4:45 PM'
  },
  {
    id: 'g8-kis-1',
    title: 'Uhakiki wa Fasihi',
    author: 'Dennis Musau',
    coverImage: '/covers/kis-8.jpg',
    audioUrl: SAMPLE_AUDIO,
    duration: '03:09',
    grade: 8,
    date: 'Oct 28th 2024 4:45 PM'
  },
  {
    id: 'g8-sci-1',
    title: 'Physics Fundamentals',
    author: 'Dennis Musau',
    coverImage: '/covers/sci-8.jpg',
    audioUrl: SAMPLE_AUDIO,
    duration: '03:09',
    grade: 8,
    date: 'Oct 28th 2024 4:45 PM'
  }
];