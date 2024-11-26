import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Howl } from 'howler';
import { BackButton } from '../components/BackButton';
import { QuizProgress } from '../components/QuizProgress';
import { QuizOption } from '../components/QuizOption';
import { useGrade } from '../contexts/GradeContext';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { Question } from '../types/exam';
import { getQuizQuestions } from '../services/quizService';

export const Quiz: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const { selectedGrade } = useGrade();
  const navigate = useNavigate();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [showCompletion, setShowCompletion] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const applauseSound = new Howl({
    src: ['https://raw.githubusercontent.com/samora254/Kitabu/main/Applause%20Sound%20Effect.mp3'],
    volume: 0.5,
    html5: true
  });

  useEffect(() => {
    const loadQuestions = async () => {
      if (!subjectId || !selectedGrade) {
        setError('Missing subject or grade information');
        setLoading(false);
        return;
      }

      try {
        const loadedQuestions = await getQuizQuestions(subjectId, selectedGrade);
        setQuestions(loadedQuestions);
        setAnsweredQuestions(new Array(loadedQuestions.length).fill(false));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load questions');
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [subjectId, selectedGrade]);

  const handleAnswerSelect = (answer: string) => {
    if (showAnswer || quizCompleted) return;
    setSelectedAnswer(answer);
  };

  const handleCheck = () => {
    const currentQ = questions[currentQuestion];
    if (!selectedAnswer || !currentQ.options) return;
    setShowAnswer(true);
    
    const isCorrect = currentQ.options[currentQ.correctAnswer] === selectedAnswer;
    if (isCorrect) setScore(prev => prev + 1);
    
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      setShowCompletion(true);
      setQuizCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      applauseSound.play();
      
      // Store quiz completion in localStorage
      if (subjectId) {
        localStorage.setItem(`quiz-completed-${subjectId}`, 'true');
      }
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const handleExit = () => {
    navigate(`/subject/${subjectId}`);
  };

  useEffect(() => {
    // Check if quiz was already completed
    if (subjectId) {
      const isCompleted = localStorage.getItem(`quiz-completed-${subjectId}`);
      if (isCompleted) {
        navigate(`/subject/${subjectId}`);
      }
    }

    return () => {
      applauseSound.unload();
    };
  }, [subjectId, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !questions.length) {
    return <ErrorMessage message={error || 'No questions available'} />;
  }

  const currentQ = questions[currentQuestion];
  if (!currentQ.options) {
    return <ErrorMessage message="Question format is invalid" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-4">
        <div className="mb-6 flex items-center">
          <BackButton 
            className="text-gray-600" 
            customPath={`/subject/${subjectId}`}
          />
          <h1 className="text-xl font-bold ml-4 capitalize">
            {subjectId} Quiz - Grade {selectedGrade}
          </h1>
        </div>

        <QuizProgress
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          answeredQuestions={answeredQuestions}
        />

        <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
          <h2 className="text-gray-500 mb-4">
            QUESTION {currentQuestion + 1} OF {questions.length}
          </h2>
          <p className="text-xl font-medium mb-6">{currentQ.text}</p>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <QuizOption
                key={index}
                text={option}
                selected={selectedAnswer === option}
                correct={showAnswer ? index === currentQ.correctAnswer : null}
                onClick={() => handleAnswerSelect(option)}
                disabled={showAnswer}
              />
            ))}
          </div>

          {showAnswer && (
            <div className={`mt-6 p-4 rounded-lg ${
              selectedAnswer === currentQ.options[currentQ.correctAnswer]
                ? 'bg-green-50 text-green-800'
                : 'bg-red-50 text-red-800'
            }`}>
              <p className="font-medium mb-2">
                {selectedAnswer === currentQ.options[currentQ.correctAnswer]
                  ? 'Great! That\'s correct!'
                  : 'Oops! That\'s incorrect.'}
              </p>
              <p>{currentQ.explanation}</p>
            </div>
          )}

          <button
            onClick={showAnswer ? handleNext : handleCheck}
            className={`w-full mt-6 py-3 px-4 rounded-lg font-medium text-white transition-colors ${
              !selectedAnswer
                ? 'bg-gray-300 cursor-not-allowed'
                : showAnswer
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-emerald-500 hover:bg-emerald-600'
            }`}
            disabled={!selectedAnswer}
          >
            {showAnswer
              ? currentQuestion === questions.length - 1
                ? 'Finish'
                : 'Next Question'
              : 'Check Answer'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showCompletion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ scale: 0.5, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 20 }}
              className="bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Quiz Complete! 🎉</h2>
              <div className="text-6xl font-bold mb-4 text-green-500">
                {Math.round((score / questions.length) * 100)}%
              </div>
              <p className="text-xl mb-2">
                You got {score} out of {questions.length} questions correct
              </p>
              <p className="text-gray-600 mb-8">
                {score === questions.length
                  ? 'Perfect score! Outstanding work! 🌟'
                  : score >= questions.length * 0.7
                  ? 'Great job! Keep it up! 🎯'
                  : 'Good effort! Keep practicing! 💪'}
              </p>
              
              <button
                onClick={handleExit}
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Back to Subject
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};