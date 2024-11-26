import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDh2ZM3zIVKjuTGJsc-aCpfpqkLXQWTkWI",
  authDomain: "kitabuai.firebaseapp.com",
  projectId: "kitabuai",
  storageBucket: "kitabuai.appspot.com",
  messagingSenderId: "313416624091",
  appId: "1:313416624091:web:92b01a1cae4ee5f6ad69fe",
  measurementId: "G-SH4V2YLNPJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize collections with proper typing
export const quizQuestionsRef = collection(db, 'quizQuestions');

// Add indexes for quiz questions queries
export const quizQuestionsIndexes = {
  bySubjectAndGrade: ['subjectId', 'gradeLevel', 'createdAt'],
  byCreatedAt: ['createdAt']
};