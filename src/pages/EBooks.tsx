import React, { useState } from 'react';
import { BackButton } from '../components/BackButton';
import { useGrade } from '../contexts/GradeContext';
import { PDFViewer } from '../components/PDFViewer';
import { books } from '../data/books';

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

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => (
  <div
    className="bg-white rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200 shadow-md"
    onClick={onClick}
  >
    <div className="aspect-w-3 aspect-h-4">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://raw.githubusercontent.com/samora254/Kitabu/main/book-cover-placeholder.png';
        }}
      />
    </div>
    <div className="p-3">
      <h3 className="font-bold text-sm mb-1 line-clamp-2">{book.title}</h3>
      <p className="text-gray-600 text-xs">{book.author}</p>
    </div>
  </div>
);

const BookSection: React.FC<{ title: string; books: Book[]; onBookClick: (book: Book) => void }> = ({
  title,
  books,
  onBookClick
}) => (
  <div className="mb-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-blue-600">{title}</h2>
      <button className="text-pink-500">
        <span className="text-2xl">→</span>
      </button>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onClick={() => onBookClick(book)} />
      ))}
    </div>
  </div>
);

export const EBooks: React.FC = () => {
  const { selectedGrade } = useGrade();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const popularBooks = books
    .filter(book => book.grade === selectedGrade)
    .slice(0, 3);

  const newBooks = books
    .filter(book => book.grade === selectedGrade)
    .slice(3, 6);

  const scienceMathBooks = books
    .filter(book => 
      book.grade === selectedGrade && 
      (book.subject === 'Mathematics' || book.subject === 'Science')
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <BackButton className="text-white" />
              <h1 className="text-2xl font-bold">BookSmart</h1>
            </div>
            <button className="text-white">Sign In</button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <BookSection 
          title="Popular Books" 
          books={popularBooks}
          onBookClick={setSelectedBook}
        />

        <BookSection 
          title="New Books" 
          books={newBooks}
          onBookClick={setSelectedBook}
        />

        <BookSection 
          title="Science, Math & Arts" 
          books={scienceMathBooks}
          onBookClick={setSelectedBook}
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-6xl mx-auto flex justify-around py-4">
          <button className="flex flex-col items-center text-blue-600">
            <span className="text-2xl">🏠</span>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center text-blue-600">
            <span className="text-2xl">📚</span>
            <span className="text-xs">My Library</span>
          </button>
          <button className="flex flex-col items-center text-blue-600">
            <span className="text-2xl">☰</span>
            <span className="text-xs">Menu</span>
          </button>
        </div>
      </div>

      {selectedBook && (
        <PDFViewer
          pdfUrl={selectedBook.pdfUrl}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};