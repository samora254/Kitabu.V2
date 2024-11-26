import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { Landing } from './pages/Landing';
import { Subject } from './pages/Subject';
import { BrainTease } from './pages/BrainTease';
import { Quiz } from './pages/Quiz';
import { Profile } from './pages/Profile';
import { Learning } from './pages/Learning';
import { AudioBooks } from './pages/AudioBooks';
import { EBooks } from './pages/EBooks';
import { RevisionPapers } from './pages/RevisionPapers';
import { ProtectedRoute } from './components/ProtectedRoute';
import { GradeProvider } from './contexts/GradeContext';
import { LearningProvider } from './contexts/LearningContext';

export const App: React.FC = () => {
  return (
    <GradeProvider>
      <LearningProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/subject/:subjectId" 
              element={
                <ProtectedRoute>
                  <Subject />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/brain-tease/:subjectId" 
              element={
                <ProtectedRoute>
                  <BrainTease />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/quiz/:subjectId" 
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/learning/:subjectId/:topicId" 
              element={
                <ProtectedRoute>
                  <Learning />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/audio-books" 
              element={
                <ProtectedRoute>
                  <AudioBooks />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/e-books" 
              element={
                <ProtectedRoute>
                  <EBooks />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/revision-papers" 
              element={
                <ProtectedRoute>
                  <RevisionPapers />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </BrowserRouter>
      </LearningProvider>
    </GradeProvider>
  );
};