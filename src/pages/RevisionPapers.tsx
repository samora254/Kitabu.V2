import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGrade } from '../contexts/GradeContext';
import { ExamPaper } from '../components/exam/ExamPaper';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ExamCard } from '../components/exam/ExamCard';
import { ExamFilters } from '../components/exam/ExamFilters';
import { examSets } from '../data/exams';
import { Question } from '../types/exam';

interface ExamData {
  subject: string;
  exam: string;
  questions: Question[];
}

export const RevisionPapers: React.FC = () => {
  const { selectedGrade } = useGrade();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedExam, setSelectedExam] = useState<ExamData | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if we need to generate a new exam
    const state = location.state as { generateNew?: boolean; subject?: string; grade?: number };
    if (state?.generateNew && state.subject) {
      handleExamClick(state.subject, `${state.subject.charAt(0).toUpperCase() + state.subject.slice(1)} Exam`);
      // Clear the state to prevent regenerating on subsequent renders
      navigate(location.pathname, { replace: true });
    }
  }, [location.state]);

  const exams = examSets[8]; // Only Grade 8 exams
  const subjects = ['all', ...Object.keys(exams)];

  const filteredExams = Object.entries(exams)
    .filter(([subject]) => {
      if (selectedSubject !== 'all' && subject !== selectedSubject) {
        return false;
      }
      if (searchTerm) {
        return subject.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    });

  const handleExamClick = async (subjectId: string, examName: string) => {
    setLoading(true);
    try {
      const examQuestions = exams[subjectId as keyof typeof exams];
      if (!examQuestions || examQuestions.length === 0) {
        console.error('No questions found for exam:', subjectId);
        return;
      }

      // Shuffle questions and select a subset
      const shuffledQuestions = [...examQuestions].sort(() => Math.random() - 0.5);
      const selectedQuestions = shuffledQuestions.slice(0, 20); // Take 20 questions

      setSelectedExam({
        subject: subjectId,
        exam: examName,
        questions: selectedQuestions
      });
    } catch (error) {
      console.error('Error loading exam:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/home');
  };

  const handleExamBack = () => {
    setSelectedExam(null);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (selectedExam) {
    return (
      <ExamPaper
        subject={selectedExam.subject}
        grade={selectedGrade}
        term="Term 1"
        questions={selectedExam.questions}
        onBack={handleExamBack}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-500 text-white p-6 relative">
        <button
          onClick={handleBack}
          className="absolute top-6 left-4 text-white hover:text-gray-200 transition-colors"
          aria-label="Back to Home"
        >
          ←
        </button>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Revision Papers</h1>
          <p className="text-white/80">Grade {selectedGrade}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <ExamFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedSubject={selectedSubject}
          onSubjectChange={setSelectedSubject}
          subjects={subjects}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredExams.length > 0 ? (
            filteredExams.map(([subject, questions]) => (
              <ExamCard
                key={subject}
                subject={subject}
                questionCount={questions.length}
                onClick={() => handleExamClick(
                  subject,
                  `${subject.charAt(0).toUpperCase() + subject.slice(1)} Exam`
                )}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500">
              No exams found for this filter criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};