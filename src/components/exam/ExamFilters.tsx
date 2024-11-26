import React from 'react';

interface ExamFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedSubject: string;
  onSubjectChange: (value: string) => void;
  subjects: string[];
}

export const ExamFilters: React.FC<ExamFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedSubject,
  onSubjectChange,
  subjects
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search exams..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <select
        value={selectedSubject}
        onChange={(e) => onSubjectChange(e.target.value)}
        className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {subjects.map(subject => (
          <option key={subject} value={subject}>
            {subject === 'all' ? 'All Subjects' : subject.charAt(0).toUpperCase() + subject.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};