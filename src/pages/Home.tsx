import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HomeworkHelp } from '../components/HomeworkHelp';
import { Notification } from '../components/Notification';
import { AccountMenu } from '../components/AccountMenu';

export const Home: React.FC = () => {
  const [showGradeDropdown, setShowGradeDropdown] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNotificationClick = () => {
    setNotificationMessage('No new notifications');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handlePlayQuizClick = () => {
    setNotificationMessage('Still cooking! Check back soon.');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-white">KITABU</span>
              <span className="text-green-500">.AI</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowGradeDropdown(!showGradeDropdown)}
                className="bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors"
              >
                GRADE 8
              </button>
            </div>
            <button 
              className="text-white hover:text-gray-300 transition-colors"
              onClick={handleNotificationClick}
            >
              🔔
            </button>
            <AccountMenu />
          </div>
        </header>

        <div className="p-4">
          <img 
            src="/carousel-1.png" 
            alt="Homework is Easy and Fun with Kitabu AI" 
            className="w-full h-auto rounded-lg"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://raw.githubusercontent.com/samora254/kitabuAI.v1a/main/Public/carousel-1.png';
            }}
          />
        </div>

        <div className="p-4 grid grid-cols-3 gap-4">
          <Link to="/e-books" className="flex flex-col items-center">
            <span className="text-2xl">📚</span>
            <span className="text-sm">E-Books</span>
          </Link>
          <Link to="/audio-books" className="flex flex-col items-center">
            <span className="text-2xl">🎧</span>
            <span className="text-sm">Audio Books</span>
          </Link>
          <Link to="/revision-papers" className="flex flex-col items-center">
            <span className="text-2xl">📝</span>
            <span className="text-sm">Revision Papers</span>
          </Link>
        </div>

        <div className="p-4 grid grid-cols-2 gap-4">
          <Link to="/subject/mathematics" className="bg-red-400 text-white p-4 rounded-lg hover:bg-red-500 transition-colors">
            Mathematics
          </Link>
          <Link to="/subject/english" className="bg-green-400 text-white p-4 rounded-lg hover:bg-green-500 transition-colors">
            English
          </Link>
          <Link to="/subject/kiswahili" className="bg-blue-400 text-white p-4 rounded-lg hover:bg-blue-500 transition-colors">
            Kiswahili
          </Link>
          <Link to="/subject/science" className="bg-orange-700 text-white p-4 rounded-lg hover:bg-orange-800 transition-colors">
            Science
          </Link>
          <Link to="/subject/social" className="bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-600 transition-colors">
            Social
          </Link>
          <button 
            onClick={handlePlayQuizClick}
            className="bg-gray-800 text-white p-4 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
          >
            <span className="mr-2">🎮</span>
            PLAY QUIZ MANIA
          </button>
        </div>

        <div className="p-4">
          <HomeworkHelp />
        </div>

        <AnimatePresence>
          {showNotification && (
            <Notification message={notificationMessage} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};