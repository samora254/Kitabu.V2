import React, { useState } from 'react';
import { BackButton } from '../components/BackButton';
import { AudioBook } from '../components/AudioBook';
import { useGrade } from '../contexts/GradeContext';
import { audioBooks } from '../data/audioBooks';

export const AudioBooks: React.FC = () => {
  const { selectedGrade } = useGrade();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = audioBooks
    .filter(book => book.grade === selectedGrade)
    .filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-500 text-white p-6 relative">
        <BackButton className="absolute top-6 left-4 text-white" />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Audio Books</h1>
          <p className="text-white/80">Grade {selectedGrade}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <AudioBook
                key={book.id}
                {...book}
              />
            ))
          ) : (
            <div className="col-span-2 text-center py-8 text-gray-500">
              No audio books found for this grade level.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};